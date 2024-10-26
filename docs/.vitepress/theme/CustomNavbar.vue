<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

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
</script>

<template>
  <header class="VPNav">
    <div class="container">
      <div class="title">
        <a href="/" :title="theme.siteTitle">
          <img v-if="theme.logo" class="logo" :src="theme.logo" alt="Logo">
          <span v-else>{{ theme.siteTitle }}</span>
        </a>
      </div>
      <div class="menu-wrapper">
        <button class="menu-button" @click="toggleMenu" aria-label="Menu">
          <div class="icon"></div>
        </button>
        <nav class="menu" :class="{ 'is-open': isOpen }">
          <a v-for="item in menuItems" :key="item.text" :href="item.link" @click="isOpen = false">{{ item.text }}</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.VPNav {
  position: relative;
  padding: 0 24px;
  width: 100%;
  height: var(--vp-nav-height);
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-nav-bg-color);
  transition: border-color 0.5s, background-color 0.5s;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.title {
  font-size: 1.3rem;
  font-weight: 600;
}

.logo {
  height: 24px;
  vertical-align: middle;
}

.menu-wrapper {
  position: relative;
}

.menu-button {
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  position: relative;
}

.icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: translateY(-50%);
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 8px 0;
  display: none;
  flex-direction: column;
  z-index: 100;
}

.menu.is-open {
  display: flex;
}

.menu a {
  padding: 8px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  white-space: nowrap;
}

.menu a:hover {
  background-color: var(--vp-c-bg-soft);
}

@media (max-width: 768px) {
  .menu {
    width: 100vw;
    left: -24px;
    right: -24px;
  }
}
</style>