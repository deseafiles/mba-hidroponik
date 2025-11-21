<script setup>
import MainButton from './MainButton.vue';
</script>

<template>
<div class="flex flex-col items-center text-center py-10">
  <!-- Judul -->
  <h1 class="text-5xl font-extrabold text-emerald-700 tracking-wide mb-6">
    Mba Hidroponik
  </h1>

  <!-- Navbar -->
  <div class="flex flex-wrap justify-center gap-4 text-white text-sm">
    <a href="/">
      <MainButton>
        Beranda
      </MainButton>
    </a>
    <a href="/tentang-kami">
      <MainButton>
        Tentang Kami
      </MainButton>
    </a>
    <a href="/cara-kami">
      <MainButton>
        Cara Kami
      </MainButton>
    </a>
    <a href="/produk-kami">
      <MainButton>
        Produk Kami
      </MainButton>
    </a>
    <a href="/testimoni">
      <MainButton>
        Testimoni
      </MainButton>
    </a>
  </div>

  <!-- Garis pemisah -->
  <div class="mt-2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
</div>
</template>


