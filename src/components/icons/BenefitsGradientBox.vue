<script setup>
const props = defineProps({
  key: String, 
  desc: String,
  name: String,
})

</script>

<template>
  <div 
    class="p-[2px] rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 
           mx-4 sm:mx-6 md:mx-8 my-6"
  >
    <div class="rounded-xl bg-white text-green-700 py-5">

      <h1 
        class="flex items-center justify-center 
               text-lg sm:text-xl md:text-2xl font-bold py-4 text-center"
      >
        <slot name="judul" />
      </h1>

      <div
        class="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 
               py-5 px-4 sm:px-10 md:px-20
               md:flex-row md:justify-between"
      >
        <slot name="item" />
      </div>
    <div> 
      {{desc}}
      {{name}}
    </div>

    </div>
  </div>
</template>
