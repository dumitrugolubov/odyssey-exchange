<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { Layout } = DefaultTheme
const { theme, isDark } = useData()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDark = () => {
  isDark.value = !isDark.value
}

const navItems = computed(() => theme.value.nav || [])
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <nav class="custom-nav">
        <a v-for="item in navItems" :key="item.text" :href="item.link" class="custom-nav-link">
          {{ item.text }}
        </a>
      </nav>
    </template>
    <template #nav-bar-content-after>
      <div class="mobile-menu">
        <button @click="toggleMenu" class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav :class="{ 'is-open': isMenuOpen }">
          <a v-for="item in navItems" :key="item.text" :href="item.link" @click="toggleMenu">
            {{ item.text }}
          </a>
          <button @click="toggleDark" class="toggle-dark">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </nav>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.custom-nav {
  display: flex;
  align-items: center;
}

.custom-nav-link {
  margin-right: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.custom-nav-link:hover {
  color: var(--vp-c-brand);
}

.mobile-menu {
  display: none;
}

.toggle-dark {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .custom-nav {
    display: none;
  }

  .mobile-menu {
    display: block;
    position: relative;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }

  .hamburger span {
    width: 2rem;
    height: 0.25rem;
    background: var(--vp-c-text-1);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .mobile-menu nav {
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    background: var(--vp-c-bg);
    display: none;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu nav.is-open {
    display: flex;
  }

  .mobile-menu nav a {
    font-size: 1rem;
    padding: 0.5rem 0;
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: color 0.3s linear;
  }

  .mobile-menu nav a:hover {
    color: var(--vp-c-brand);
  }
}
</style>