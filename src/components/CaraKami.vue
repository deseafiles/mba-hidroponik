<script setup>
import NavBar from './icons/NavBar.vue';
import SubSection from './icons/SubSection.vue';
import InfoBox from './icons/InfoBox.vue';
import BenefitsGradientBox from './icons/BenefitsGradientBox.vue';
import CallToAction from './icons/CallToAction.vue';
import FooterBar from './icons/FooterBar.vue';
import { Icon } from '@iconify/vue';

// Import gambar
import homepageImg from '../assets/Homepage.jpeg';
import c1Img from '../assets/c-1.jpeg';
import c2Img from '../assets/c-2.jpeg';
</script>

<template>
  <NavBar />

    <div 
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
        "isAutoPlay": true
      }' 
      class="relative w-full flex-shrink-0"
    >
      <div class="hs-carousel relative overflow-hidden w-full min-h-[40vh] md:min-h-[50vh] rounded-lg">
        <div class="hs-carousel-body absolute top-0 left-0 flex transition-transform duration-700">
          
          <!-- Slide 1 -->
          <div class="hs-carousel-slide w-full h-[40vh] md:h-[50vh] relative flex-shrink-0">
            <img 
              :src="homepageImg" 
              alt="Gambar Kebun 1" 
              class="w-full h-full object-cover object-center"
            />
          </div>

          <!-- Slide 2 -->
          <div class="hs-carousel-slide w-full h-[40vh] md:h-[50vh] relative flex-shrink-0">
            <img 
              :src="c1Img" 
              alt="Gambar Kebun 2" 
              class="w-full h-full object-cover object-center"
            />
          </div>

          <!-- Slide 3 -->
          <div class="hs-carousel-slide w-full h-[40vh] md:h-[50vh] relative flex-shrink-0">
            <img 
              :src="c2Img" 
              alt="Gambar Kebun 3" 
              class="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      <button type="button" class="hs-carousel-prev absolute inset-y-0 left-0 flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 rounded-l-lg z-10">
        <span class="text-2xl">&lt;</span>
      </button>
      <button type="button" class="hs-carousel-next absolute inset-y-0 right-0 flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 rounded-r-lg z-10">
        <span class="text-2xl">&gt;</span>
      </button>

      <div class="hs-carousel-pagination absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20"></div>
    </div>

    <SubSection class="text-center m-4">
      <template #judul> Apa Itu Metode Hidroponik? </template>
      <template #isi>
        Hidroponik adalah metode budidaya tanaman tanpa tanah, dengan akar tanaman tumbuh dalam larutan air yang kaya nutrisi. <br>
        Sistem ini memungkinkan kontrol pH, nutrisi, oksigen, sehingga tanaman tumbuh lebih cepat dan sehat. <br>
        Ideal untuk perkotaan atau ruang terbatas, ramah lingkungan dan efisien.
      </template>
    </SubSection>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-4 md:m-10"> 
      <InfoBox> 
        <template #judul> Penyemaian Benih </template> 
        <template #isi> Memilih benih berkualitas <br> Menyiapkan media tanam <br> Melakukan penyemaian <br> </template> 
      </InfoBox> 
      <InfoBox> 
        <template #judul> Persiapan Sistem dan Nutrisi </template> 
        <template #isi> Siapkan sistem <br> Siapkan larutan nutrisi<br> Atur pH larutan<br> </template> 
      </InfoBox> 
      <InfoBox> 
        <template #judul> Perawatan Tanaman </template> 
        <template #isi> Monitor pH dan nutrisi <br> Cek pertumbuhan tanaman <br> Berikan cahaya optimal <br> </template> 
      </InfoBox> 
      <InfoBox> 
        <template #judul> Panen dan Hasil </template> 
        <template #isi> Panen saat tanaman matang <br> Persiapkan tanaman baru <br> Evaluasi hasil <br> </template> 
      </InfoBox> 
    </div>

    <BenefitsGradientBox>
      <template #judul>Keuntungan Metode Hidroponik</template>
      <template #item>
        <div class="flex flex-col items-center text-center">
          <Icon icon="mdi:water-pump" width="55" height="55" class="text-green-600"/>
          <p class="mt-2">Hemat Air</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Icon icon="mdi:plant-outline" width="55" height="55"/>
          <p class="mt-2">Lebih Sehat</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Icon icon="simple-icons:organicmaps" width="55" height="55"/>
          <p class="mt-2">Bebas Pestisida</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Icon icon="lucide:map-pin-house" width="55" height="55"/>
          <p class="mt-2">Hemat Lahan</p>
        </div>
      </template>
    </BenefitsGradientBox>

    <CallToAction />
    <FooterBar />
  </div>
</template>
