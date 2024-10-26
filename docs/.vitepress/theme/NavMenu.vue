<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Services', link: '/services' },
  { text: 'Partnership', link: '/partnership' },
  { text: 'Solutions', link: '/solutions' },
  { text: 'Features', link: '/features' },
  { text: 'Contact', link: '/contact' }
]

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
}

// Client-only component
const ClientOnly = {
  render() {
    if (this.$slots.default) {
      return this.$slots.default({ isDark: isDark.value })
    }
  }
}

// Initialize dark mode on client-side only
if (typeof window !== 'undefined') {
  isDark.value = document.documentElement.classList.contains('dark')
}
</script>

<template>
  <div class="nav-menu">
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
      <span class="menu-icon"></span>
    </button>
    <nav :class="{ 'is-open': isOpen }">
      <a v-for="item in menuItems" :key="item.text" :href="item.link" @click="isOpen = false">{{ item.text }}</a>
      <ClientOnly v-slot="{ isDark }">
        <button class="toggle-dark-mode" @click="toggleDarkMode">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </ClientOnly>
    </nav>
  </div>
</template>

<style scoped>
/* ... (styles remain unchanged) ... */
</style>