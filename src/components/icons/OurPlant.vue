<script setup>
  const props = defineProps({
    nama: String,
  })
</script>

<template>
  <div
    class="flex items-center border border-green-800 rounded-md 
           px-3 py-1 my-2 text-sm
           w-full max-w-xs   
           sm:max-w-sm             
           md:max-w-none"
  >
    <span class="mr-2 text-xs">●</span>
    <span class="text-xs sm:text-sm"> 
      {{ nama }}
    </span>
  </div>
</template>
