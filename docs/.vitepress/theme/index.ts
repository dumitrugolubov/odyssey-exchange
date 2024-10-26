import DefaultTheme from 'vitepress/theme'
import './style.css'
import TestimonialSlider from './TestimonialSlider.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TestimonialSlider', TestimonialSlider)
  }
}