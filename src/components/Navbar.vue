<script setup>
import logo from '@/assets/images/logo.png'
import Navitem from '@/components/Navitem.vue'
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <Navitem routePath="/" text="Home" />
              <Navitem routePath="/jobs" text="Jobs" />
              <Navitem routePath="/add-job" text="Add Job" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
