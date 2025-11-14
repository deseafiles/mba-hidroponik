<script setup>
import FooterBar from './icons/FooterBar.vue';
import InfoMaps from './icons/InfoMaps.vue';
import NavBar from './icons/NavBar.vue';
</script>

<template>
  <NavBar />

  <div class="w-full">
    <img 
      src="../assets/tanaman-1.jpeg" 
      alt="Tanaman" 
      class="w-full h-[350px] object-cover"
    />
  </div>

  <div class="max-w-3xl mx-auto px-6 py-10 my-10 border border-green-800 rounded-xl">
    <h1 class="text-3xl font-bold text-green-700 mb-4">
      Apa itu metode hidroponik?
    </h1>

    <p class="text-gray-700 leading-relaxed text-justify">
      Hidroponik adalah metode bercocok tanam modern yang tidak menggunakan media tanah. 
      Sebagai gantinya, akar tanaman langsung menerima nutrisi dari air yang telah diperkaya 
      dengan mineral-mineral penting.<br /><br />
      Dengan metode ini, kami bisa mengontrol dengan presisi nutrisi yang diterima setiap 
      tanaman, menghasilkan sayuran dan buah-buahan yang lebih sehat, lebih cepat tumbuh, 
      dan lebih lezat.
    </p>
  </div>

  <InfoMaps />
  <FooterBar />
</template>
