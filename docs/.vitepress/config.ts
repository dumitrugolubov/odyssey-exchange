import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Odyssey Exchange",
  description: "Your Trusted Centralized Cryptocurrency Exchange",
  themeConfig: {
    siteTitle: 'Odyssey Exchange',
    logo: '/images/ODY-35.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Partnership', link: '/partnership' },
      { text: 'Solutions', link: '/solutions' },
      { text: 'Features', link: '/features' },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Why Partner With Us', link: '/guide/why-partner' },
          { text: 'Integration Process', link: '/guide/integration' },
          { text: 'Revenue Models', link: '/guide/revenue-models' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/odysseyexchange' },
      { icon: 'twitter', link: 'https://twitter.com/odysseyexchange' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/images/ODY-35.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  appearance: true,
  base: '/',
  outDir: '.vitepress/dist',
  cacheDir: '.vitepress/cache',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})