<script setup>
import { ref, onMounted } from 'vue'

const testimonials = [
{ id: 1, text: "Thanks to Odyssey Exchange's expertise, our token listing was completed in record time. Their support team is exceptional!", author: "Michael Chen, CEO of TokenTech" },
{ id: 2, text: "Odyssey Exchange's launchpad features provided everything we needed for our IDO. The interface is user-friendly and secure.", author: "Sarah Williams, Co-founder of CryptoStart" },
{ id: 3, text: "The multi-tier referral system at Odyssey Exchange is a game-changer. Our community grew exponentially within weeks.", author: "David Miller, Growth Lead at BlockStart" }
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