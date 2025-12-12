<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MainButton from "./MainButton.vue";
const isOpen = ref(false);
const route = useRoute();
const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Produk Kami", path: "/produk-kami" },
  { name: "Cara Kami", path: "/cara-kami" },
  { name: "Tentang Kami", path: "/tentang-kami" },
  { name: "Testimoni", path: "/testimoni" },
  {name: "AboutMe", path: '/about-me'}
];
const isActive = (path) => route.path === path;
</script>
<template>
  <div class="flex flex-col items-center text-center py-10 px-4">
    <div class="w-full flex items-center justify-between sm:block">
      <h1 class="text-3xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide mb-6 sm:mb-6">
        Mba Hidroponik
      </h1>
      <button class="sm:hidden flex flex-col gap-1" @click="isOpen = !isOpen">
        <span class="w-7 h-[3px] bg-emerald-700 rounded"></span>
        <span class="w-7 h-[3px] bg-emerald-700 rounded"></span>
        <span class="w-7 h-[3px] bg-emerald-700 rounded"></span>
      </button>
    </div>
    <!-- Navbar Desktop -->
    <div class="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-4 text-white text-sm">
      <RouterLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
      >
        <MainButton :class="isActive(link.path) ? 'bg-emerald-900' : ''">
          {{ link.name }}
        </MainButton>
      </RouterLink>
    </div>
    <div class="mt-2 w-full sm:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
  </div>
  <!-- Navbar Mobile -->
  <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 bg-black/40 sm:hidden z-40"></div>
  <div
    class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-4 transform transition-transform duration-300 sm:hidden z-50"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <button @click="isOpen = false" class="self-end mb-4 text-gray-600 text-xl">✕</button>
    <RouterLink
      v-for="link in navLinks"
      :key="link.path"
      :to="link.path"
      class="font-medium"
      :class="isActive(link.path) ? 'text-emerald-900' : 'text-gray-700'"
      @click="isOpen = false"
    >
      {{ link.name }}
    </RouterLink>
  </div>
</template>
