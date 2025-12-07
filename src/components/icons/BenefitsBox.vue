<script setup>

</script>

<template>
  <div class="bg-emerald-500 py-5 my-5 mx-8 rounded-xl">
    <h1 class="flex items-center justify-center text-white text-xl font-bold py-5">
      Kenapa Memilih Hidroponik Kami?
    </h1>

    <div
      class="flex flex-col items-center justify-center gap-10 text-white py-5 px-6 md:flex-row md:justify-between md:px-64">

      <slot name="item" />

    </div>
  </div>
</template>
