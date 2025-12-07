<script setup>
</script>

<template>
  <div
    class="flex flex-col justify-between h-full rounded-xl text-white 
           bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 
           px-4 py-5 sm:px-6 sm:py-6">

    <h3 class="text-lg sm:text-xl font-semibold mb-3">
      <slot name="judul" />
    </h3>

    <p class="text-sm sm:text-base leading-relaxed">
      <slot name="isi" />
    </p>

    <div class="mt-4 flex justify-end text-sm sm:text-base font-medium">
      <slot name="aksi" />
    </div>

  </div>
</template>
