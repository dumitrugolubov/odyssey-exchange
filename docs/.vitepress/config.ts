import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Odyssey Exchange - Memecoins | Crypto Exchange",
  description: "The First Exchange Focused on Memecoin Trading & Investment",
  themeConfig: {
    siteTitle: 'Odyssey Exchange Bussiness Solutions',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Partnership', link: '/partnership' },
      { text: 'Solutions', link: '/solutions' },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Why Partner With Us', link: '/guide/why-partner' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: {
          svg: `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="telegram-gradient" x1="50%" y1="0%" x2="50%" y2="99.2583404%">
                <stop offset="0%" stop-color="#2AABEE"/>
                <stop offset="100%" stop-color="#229ED9"/>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="currentColor" cx="500" cy="500" r="500"/>
              <path d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z" fill="#fff"/>
            </g>
          </svg>`
        },
        link: 'https://t.me/t_dmi3'
      },
      { icon: 'youtube', link: 'https://t.me/t_dmi3' }
    ]
  },
  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['script', {}, `
      document.addEventListener('DOMContentLoaded', function() {
        const siteTitle = document.querySelector('.VPNavBarTitle');
        if (siteTitle) {
          const link = document.createElement('a');
          link.href = 'https://odyssey.trade/register?inviteCode=EAATH';
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.style.textDecoration = 'none';
          link.style.color = 'inherit';
          link.textContent = 'Odyssey Exchange';
          siteTitle.innerHTML = '';
          siteTitle.appendChild(link);
        }
      });
    `]
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
