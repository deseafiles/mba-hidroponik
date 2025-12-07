<script setup>
import {RouterLink} from 'vue-router';
import MainButton from './MainButton.vue';
</script>

<template>
<section class="flex flex-col items-center justify-between overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 px-8 py-12 text-white shadow-lg md:flex-row md:px-20">
  <div class="flex flex-col space-y-6 text-center md:w-1/2 md:text-left">
    <h3 class="text-4xl leading-tight font-extrabold">Sayuran Segar dari Kebun Hidroponik Kami</h3>
    <p class="text-lg opacity-90">
      Nikmati kesegaran alami langsung dari kebun kami yang ditanam dengan metode
      <span class="font-semibold text-emerald-100">hidroponik modern</span>. Bersih, sehat, dan penuh nutrisi — pilihan tepat untuk hidup lebih baik.
    </p>

    <div>
      <RouterLink to="/tentang-kami">
        <MainButton class="rounded-full bg-white px-6 py-3 font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:bg-emerald-100 hover:text-green-900">Tentang Kami</MainButton>
      </RouterLink>
    </div>
  </div>

  <div class="mt-10 flex justify-center md:mt-0 md:w-1/2">
    <img src="../../assets/homepage-1.jpeg" alt="Tanaman Hidroponik" class="h-[350px] w-[500px] rounded-3xl border-4 border-white/20 object-cover shadow-2xl" />
  </div>
</section>
</template>

