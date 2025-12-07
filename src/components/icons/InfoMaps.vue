<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <h1 class="text-green-700 text-2xl text-center mb-6 font-semibold">
    Hubungi Kami
  </h1>

  <div class="w-full flex flex-wrap justify-center gap-6 py-20">

    <a 
      href="https://maps.app.goo.gl/yCgH7XfJuYmyTgom7"
      target="_blank" 
      class="bg-green-700 text-white rounded-3xl w-[200px] h-[170px] flex flex-col justify-center items-center shadow hover:bg-green-800 transition"
    >
      <Icon icon="mdi:map-marker" width="50" height="50" />
      <p class="mt-3 text-sm font-semibold">LOKASI KAMI</p>
    </a>

    <a 
      href="#"
      class="bg-green-700 text-white rounded-3xl w-[200px] h-[170px] flex flex-col justify-center items-center shadow hover:bg-green-800 transition"
    >
      <Icon icon="iconoir:tiktok-solid" width="50" height="50" />
      <p class="mt-3 text-sm font-semibold">LINK TIKTOK</p>
    </a>

    <a 
      href="#"
      class="bg-green-700 text-white rounded-3xl w-[200px] h-[170px] flex flex-col justify-center items-center shadow hover:bg-green-800 transition"
    >
      <Icon icon="ic:outline-facebook" width="50" height="50" />
      <p class="mt-3 text-sm font-semibold">LINK FACEBOOK</p>
    </a>

    <a 
      href="#"
      class="bg-green-700 text-white rounded-3xl w-[200px] h-[170px] flex flex-col justify-center items-center shadow hover:bg-green-800 transition"
    >
      <Icon icon="ri:instagram-fill" width="50" height="50" />
      <p class="mt-3 text-sm font-semibold">LINK INSTAGRAM</p>
    </a>

  </div>
</template>
