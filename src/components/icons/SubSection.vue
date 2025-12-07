<script setup>

</script>

<template>
  <div class="p-[2px] rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 mx-10">
    <div class="flex flex-col justify-between h-full rounded-xl bg-white text-green-700 p-4">

      <h3 class="font-semibold mb-2 justify-center flex text-2xl py-4">
        <slot name="judul" />
      </h3>


      <p class="text-xl leading-relaxed text-justify p-3">
        <slot name="isi" />
      </p>

    </div>
  </div>
</template>
