import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import TestimonialSlider from './TestimonialSlider.vue'
import CustomHome from './CustomHome.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-page': () => h(CustomHome)
    })
  },
  enhanceApp({ app }) {
    app.component('TestimonialSlider', TestimonialSlider)
  }
}
