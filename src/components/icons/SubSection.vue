<script setup>

</script>

<template>
  <div 
    class="p-[2px] rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 
           mx-4 sm:mx-6 md:mx-10"
  >
    <div 
      class="flex flex-col justify-between h-full rounded-xl bg-white text-green-700 
             p-4 sm:p-6 md:p-8"
    >

      <h3 
        class="font-semibold mb-2 justify-center flex 
               text-xl sm:text-2xl md:text-3xl py-4 text-center"
      >
        <slot name="judul" />
      </h3>

      <p 
        class="text-base sm:text-lg md:text-xl leading-relaxed text-center 
               p-2 sm:p-3"
      >
        <slot name="isi" />
      </p>

    </div>
  </div>
</template>
