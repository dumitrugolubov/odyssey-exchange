export default {
  title: 'Odyssey Exchange',
  description: 'Your Trusted Centralized Cryptocurrency Exchange',
  themeConfig: {
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
    ['link', { rel: 'icon', href: '/images/ODY-35.png' }]
  ]
}