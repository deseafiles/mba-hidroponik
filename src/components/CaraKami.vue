<script setup>
import CallToAction from './icons/CallToAction.vue';
import FooterBar from './icons/FooterBar.vue';
import InfoBox from './icons/InfoBox.vue';
import NavBar from './icons/NavBar.vue';
import SubSection from './icons/SubSection.vue';
import BenefitsGradientBox from './icons/BenefitsGradientBox.vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <NavBar />
  
  <img src=".././assets/Homepage.jpeg" alt="Gambar Kebun Mama" class="w-full h-[50vh] object-cover my-4" />

  <SubSection>
    <template #judul> Apa Itu Metode Hidroponik? </template>
    <template #isi>Hidroponik adalah metode budidaya tanaman tanpa menggunakan tanah, di mana akar tanaman tumbuh dalam larutan air yang diperkaya dengan nutrisi penting. Pendekatan ini memungkinkan tanaman menerima nutrisi secara lebih tepat dan efisien, sehingga dapat tumbuh lebih cepat, lebih sehat, dan lebih bersih dibandingkan dengan metode tanam konvensional.<br>

      Dalam sistem hidroponik, setiap unsur hara dapat dikontrol secara akurat — mulai dari pH, kadar oksigen, hingga takaran nutrisi — sehingga lingkungan tumbuh menjadi lebih stabil dan bebas dari banyak risiko seperti hama tanah atau penyakit yang biasa ditemui pada pertanian tradisional.<br>

      Karena tidak membutuhkan lahan luas, hidroponik menjadi solusi ideal untuk perkotaan dan ruang terbatas. Dengan pemanfaatan teknologi yang tepat, metode ini telah berkembang menjadi salah satu bentuk pertanian modern yang berkelanjutan, efisien, serta ramah lingkungan.<br>

      Melalui pendekatan hidroponik, kami berkomitmen menghadirkan produk tanaman yang lebih berkualitas, sehat, dan ditanam dengan standar yang terukur demi memberikan pengalaman terbaik kepada masyarakat.<br> </template>
  </SubSection>

  <div class="grid grid-cols-2 gap-8 m-10">
    <InfoBox>
      <template #judul>
        Penyemaian Benih
      </template>
      <template #isi>
        Memilih benih berkualitas <br>
        Menyiapkan media tanam <br>
        Melakukan penyemaian <br>
      </template>
    </InfoBox>

    <InfoBox>
      <template #judul>
        Persiapan Sistem dan Nutrisi
      </template>
      <template #isi>
        Siapkan sistem <br>
        Siapkan larutan nutrisi<br>
        Atur pH larutan<br>
      </template>
    </InfoBox>
    
    <InfoBox>
      <template #judul>
        Penyemaian Benih
      </template>
      <template #isi>
        Memilih benih berkualitas <br>
        Menyiapkan media tanam <br>
        Melakukan penyemaian <br>
      </template>
    </InfoBox>
    
    <InfoBox>
      <template #judul>
        Penyemaian Benih
      </template>
      <template #isi>
        Memilih benih berkualitas <br>
        Menyiapkan media tanam <br>
        Melakukan penyemaian <br>
      </template>
    </InfoBox>
  </div>

<BenefitsGradientBox>
  <template #judul>
    Keuntungan Metode Hidroponik
  </template>

  <template #item>
    <div class="flex flex-col items-center text-center fill-green-700">
      <!-- <img src="../assets/images/mdi_water-pump.svg" class="w-12 h-12 bg-white" /> -->
      <Icon icon="mdi:water-pump" width="55" height="55" />
      <p class="mt-2">Hemat Air</p>
    </div>

    <div class="flex flex-col items-center text-center">
      <Icon icon="mdi:plant-outline" width="55" height="55" />

      <p class="mt-2">Lebih Sehat</p>
    </div>

    <div class="flex flex-col items-center text-center">
      <Icon icon="simple-icons:organicmaps" width="55" height="55" />
      <p class="mt-2">Bebas Pestisida</p>
    </div>

    <div class="flex flex-col items-center text-center">
      <Icon icon="lucide:map-pin-house" width="55" height="55" />
      <p class="mt-2">Hemat Lahan</p>
    </div>
  </template>
</BenefitsGradientBox>
  <CallToAction />
  <FooterBar />
</template>

