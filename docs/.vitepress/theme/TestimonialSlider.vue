<script setup>
import { ref, onMounted } from 'vue'

const testimonials = [
  { id: 1, text: "Odyssey Exchange has revolutionized our crypto business. Their white-label solution is top-notch!", author: "Jane Doe, CEO of CryptoTech" },
  { id: 2, text: "The liquidity provision from Odyssey Exchange has significantly improved our trading volumes.", author: "John Smith, Founder of TradeCoin" },
  { id: 3, text: "Their regulatory compliance support has been invaluable in navigating the complex crypto landscape.", author: "Alice Johnson, Legal Advisor at BlockChain Inc." }
]

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  setInterval(nextTestimonial, 5000) // Auto-advance every 5 seconds
})
</script>

<template>
  <div class="testimonial-slider">
    <div class="testimonial">
      <p>"{{ testimonials[currentTestimonial].text }}"</p>
      <p class="author">- {{ testimonials[currentTestimonial].author }}</p>
    </div>
    <div class="controls">
      <button @click="prevTestimonial">&lt;</button>
      <button @click="nextTestimonial">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.testimonial-slider {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.testimonial {
  min-height: 150px;
}

.author {
  font-style: italic;
  margin-top: 1rem;
}

.controls {
  margin-top: 1rem;
}

button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>