<script setup>
import { defineProps, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  routePath: {
    type: String,
    default: '/',
  },
  text: String,
})

const activeStyle = (isActive) => {
  return isActive ? 'bg-green-900 hover:bg-gray-900' : 'hover:bg-green-900'
}

const itemClasses = ref(['text-white', 'rounded-md', 'px-3', 'py-2'])
const isActiveLink = (routePath) => {
  const route = useRoute()
  return activeStyle(routePath === route.path)
}
</script>
<template>
  <RouterLink :to="routePath" :class="[...itemClasses, isActiveLink(routePath)]">{{
    text
  }}</RouterLink>
</template>
