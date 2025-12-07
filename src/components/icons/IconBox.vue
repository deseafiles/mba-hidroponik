<script setup>

</script>

<template>
  <div
    class="flex flex-col items-center justify-center 
           m-4 p-6 bg-white border rounded-lg text-green-700
           w-40 sm:w-48 lg:w-56 shadow-sm hover:shadow-md duration-200"
  >
    <div class="p-2 text-center">
      <slot name="icon" />
    </div>

    <div class="text-center mt-2 font-medium">
      <slot name="judul" />
    </div>
  </div>
</template>
