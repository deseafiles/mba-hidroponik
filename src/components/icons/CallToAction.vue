<script setup>
import MainButton from './MainButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="border-2 rounded-4xl border-green-800 flex flex-col 
              py-6 sm:py-10 px-4 sm:px-10 
              items-center justify-center 
              mx-4 sm:mx-10 my-10">

    <h1 class="py-3 sm:py-5 
               text-2xl sm:text-4xl 
               text-green-700 font-semibold text-center">
      Tertarik dengan produk kami?
    </h1>

    <h2 class="text-green-700 text-center 
               text-base sm:text-lg 
               py-6 sm:py-10 leading-relaxed">
      Hubungi kami sekarang melalui kontak di bawah ini sekarang juga!
    </h2>

    <div class="mt-2">
      <a href="https://wa.me/xxxxxxxxx">
        <MainButton 
          class="border bg-white text-green-700 
                 hover:bg-green-700 hover:text-white 
                 px-6 py-2 sm:px-10 sm:py-3 
                 text-sm sm:text-base
                 my-5">
          Hubungi Kami
        </MainButton>
      </a>
    </div>

  </div>
</template>
