<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: String,
    default: '/',
  },
  text: {
    type: String,
    default: 'Go Home',
  },
})
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink :to="to" class="text-green-500 hover:text-green-600 flex items-center">
        <i class="pi pi-arrow-left mr-2"></i> {{ text }}
      </RouterLink>
    </div>
  </section>
</template>
