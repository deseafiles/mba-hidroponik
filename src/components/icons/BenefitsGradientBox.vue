<script setup>

</script>

<template>
  <div class="p-[2px] rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 mx-8 my-6">
    <div class="rounded-xl bg-white text-green-700 py-5">

      <h1 class="flex items-center justify-center text-xl font-bold py-4">
        <slot name="judul" />
      </h1>

      <div
        class="flex flex-col items-center justify-center gap-10 py-5 px-6
               md:flex-row md:justify-between md:px-20"
      >
        <slot name="item" />
      </div>

    </div>
  </div>
</template>
