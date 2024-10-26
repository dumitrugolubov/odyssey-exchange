import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import TestimonialSlider from './TestimonialSlider.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TestimonialSlider', TestimonialSlider)
  }
}