<script setup>
</script>

<template>
  <div class="text-2xl flex flex-col text-center">

    <h1 class="bg-gradient-to-r from-green-900 via-emerald-200 to-green-200 bg-clip-text text-transparent font-extrabold"> <slot name="judul"> TENTANG MBA HIDROPONIK
</slot>
    </h1>

    <div 
      class="flex flex-col md:flex-row gap-6 rounded-2xl border-2 border-green-700 
             py-10 px-6 md:px-20 items-center text-xl text-green-800 
             mx-5 my-10"
    >
      <p class="w-full md:w-2/3">
      <slot name="isi">
        Mba Hidroponik adalah usaha yang bergerak di bidang budidaya sayuran segar
        berbasis hidroponik. Kami memproduksi berbagai jenis sayuran seperti
        selada, pakcoy, daun sop, dan sawi tanpa menggunakan tanah serta
        pestisida kimia. Fokus kami adalah menghadirkan pangan berkualitas tinggi
        sekaligus mendukung gaya hidup sehat dan ramah lingkungan.
      </slot>
      </p>

      <slot name="img">
      <img 
        class="w-full md:w-1/3 rounded-xl object-cover"
        src="../../assets/Untitled.jpeg" 
        alt="Gambar Mba Hidroponik"
      >
      </slot>
    </div>

  </div>
</template>
