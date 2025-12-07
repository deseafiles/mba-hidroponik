<script setup>
import CallToAction from './icons/CallToAction.vue';
import FooterBar from './icons/FooterBar.vue';
import NavBar from './icons/NavBar.vue';
import ProductCard from './icons/ProductCard.vue';
import ProductCardModal from './icons/ProductCardModal.vue';
import plant from '../Product.json';
import { ref, computed } from 'vue';

const searchProduct = ref('');
const showModal = ref(false);
const selectedProduct = ref(null);

const filteredPlants = computed(() =>
  plant.filter(p =>
    p.nama.toLowerCase().includes(searchProduct.value.toLowerCase())
  )
);

const openModal = (product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
};
</script>

<template>
  <NavBar />
  
  <div class="text-green-800 font-semibold mx-4">
    <h1>Tanaman Kami</h1>
    <p>
      Lihat berbagai jenis sayuran segar yang kami tanam dengan menggunakan metode hidroponik
    </p>
    
    <div class="w-full border border-green-700 rounded-2xl px-4 py-3 bg-white mt-3">
      <div class="flex items-center w-full border border-green-700 rounded-2xl px-4 py-2 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="#065f46"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.65 5.65a7.5 7.5 0 0010.6 10.6z" />
        </svg>
        <input
          v-model="searchProduct"
          type="text"
          placeholder="Cari Tanaman..."
          class="w-full ml-3 text-green-900 placeholder-green-700 outline-none"
        />
      </div>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-4">
      <ProductCard 
        v-for="p in filteredPlants"
        :key="p.id"
        :nama="p.nama"
        :JenisTanaman="p['Jenis Tanaman']"
        :MasaTanam="p['Masa Tanam']"
        :imageUrl="p.imageUrl"
        :deskripsiSingkat="p['Keterangan Singkat']"
        :harga="p.Harga"
        :BeratSatuan="p['Berat Satuan']"
        @open="() => openModal(p)"
      />
    </div>
  </div>

  <ProductCardModal 
    :show="showModal"
    :data="selectedProduct"
    @close="closeModal"
  />

  <CallToAction />
  <FooterBar />
</template>
