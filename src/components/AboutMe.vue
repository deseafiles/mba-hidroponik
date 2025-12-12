<script setup>
import Overview from './icons/Overview.vue';
import FooterBar from './icons/FooterBar.vue';
import NavBar from './icons/NavBar.vue';
import BenefitsGradientBox from './icons/BenefitsGradientBox.vue';
import skill from '../../skill.json' 
</script>

<template>
  <NavBar />
  <Overview>
    <template #judul>
        Shabrina Alya Aureliya
    </template>
    <template #isi>
      <div class="flex flex-col text-left">
        Shabrina Alya Aureliya
      </div>
      <div class="flex flex-col text-left">11231090- Informatika - ITK </div>
      <div class="flex flex-col text-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio temporibus ipsa facere facilis non, et optio consequuntur similique praesentium reprehenderit. Doloribus blanditiis sit nulla commodi sapiente delectus dicta architecto eaque.
      </div>
      
    </template>
    
    <template #img>
      <img src="../assets/plants/Bayam.jpeg" alt="foto">
    </template>
  </Overview>

  <div class="grid grid-col-3">
  <BenefitsGradientBox
    v-for="i in skill"
    :key="i.name"
    :name="i.name"
    :desc="i.desc">
  </BenefitsGradientBox>
  </div>
  <FooterBar />
</template>
