<script setup>
import { useData } from 'vitepress'
import DefaultHome from 'vitepress/theme/components/Home.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultHome>
    <template #home-hero-image>
      <div class="VPImage hero-image">
        <a v-if="frontmatter.hero.image.link" :href="frontmatter.hero.image.link" target="_blank" rel="noopener noreferrer">
          <img
            :src="frontmatter.hero.image.src"
            :alt="frontmatter.hero.image.alt"
            class="image-src"
          />
        </a>
        <img
          v-else
          :src="frontmatter.hero.image.src"
          :alt="frontmatter.hero.image.alt"
          class="image-src"
        />
      </div>
    </template>
  </DefaultHome>
</template>
