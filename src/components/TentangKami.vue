<script setup>
import FooterBar from './icons/FooterBar.vue';
import IconBox from './icons/IconBox.vue';
import InfoBox from './icons/InfoBox.vue';
import InfoMaps from './icons/InfoMaps.vue';
import NavBar from './icons/NavBar.vue';
import Overview from './icons/Overview.vue';
import { Icon } from '@iconify/vue';

</script>

<template>
  <NavBar /> 
  <Overview />
  <InfoBox class="m-5">
     <template #judul>
       <h1 class="flex items-center justify-center">Nilai Nilai Kami </h1>
     </template>

     <template #isi>
       <p class="flex items-center justify-center"> Nilai nilai yang kami tawarkan sebagai berikut.</p>
     </template>

     <template #aksi>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full place-items-center">
       <IconBox>
          <template #icon>
            <Icon icon="mdi:account-heart" width="65" height="65" />
          </template>
          <template #judul>
            <p>Kualitas Terbaik</p>
          </template>
       </IconBox>
       <IconBox>
          <template #icon>
            <Icon icon="mdi:plant" width="65" height="65" />
          </template>
          <template #judul>
            <p>Ramah Lingkungan</p>
          </template>
       </IconBox>
       <IconBox>
          <template #icon>
             <Icon icon="mdi:shopping-favorite" width="65" height="65" /> 
          </template>
          <template #judul>
            <p>Kepuasan Pelanggan</p>
          </template>
       </IconBox>
       <IconBox>
          <template #icon>
            <Icon icon="mdi:organic" width="65" height="65" />
          </template>
          <template #judul>
            <p>Bebas Pestisida</p>
          </template>
       </IconBox>
      </div>
     </template>
  </InfoBox>
  <InfoMaps />
  <FooterBar />

</template>
