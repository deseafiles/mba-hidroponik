<script setup>
const data = [
  {
    name: "Bu Maratus",
    role: "Ibu Rumah Tangga",
    rating: "4.5/5",
    text: "Sayuran seger baru dipetik langsung dianter, murah meriah bahkan diantar sampai rumah. MasyaAllah sebanyak ini cuma 20 ribu, murahnya kebangetan."
  },
  {
    name: "Bu Isni",
    role: "Pemilik Usaha Rumah Makan",
    rating: "5/5",
    text: "Yang mau membeli selada bisa di Mba Hidroponik asli besar besar. Aku sampai heran barusan beli selada segede ini. Makasi sudah diantarkan seladanya."
  },
  {
    name: "Caca",
    role: "Pelajar",
    rating: "4.5/5",
    text: "Sayurannya besar banget, beda dengan sayuran yang dijual di pasar dengan harga segitu."
  },
]
</script>

<template>
  <div class="w-full px-8 my-14">
    <h2 class="text-center text-2xl font-semibold text-green-700 mb-6">
      TESTIMONI
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 border border-green-600 rounded-xl">
      
      <div 
        v-for="(item, index) in data" 
        :key="index"
        class="p-8 flex flex-col items-center text-center"
        :class="{
          'border-r border-green-600' : index !== data.length - 1
        }"
      >
        <svg class="w-16 h-16 text-green-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
        </svg>

        <p class="font-medium text-green-800">{{ item.name }} - {{ item.role }}</p>

        <div class="flex items-center mt-3">
          <svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 20.013 4.665 24 6 15.596 0 9.748l8.332-1.73z"/>
          </svg>
          <span class="text-sm text-gray-700">{{ item.rating }}</span>
        </div>

        <p class="mt-4 text-gray-600 text-sm max-w-xs">
          “{{ item.text }}”
        </p>
      </div>

    </div>
  </div>
</template>
