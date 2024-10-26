import DefaultTheme from 'vitepress/theme'
import './style.css'
import TestimonialSlider from './TestimonialSlider.vue'
import TelegramIcon from './TelegramIcon.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TestimonialSlider', TestimonialSlider)
    app.component('TelegramIcon', TelegramIcon)
  }
}