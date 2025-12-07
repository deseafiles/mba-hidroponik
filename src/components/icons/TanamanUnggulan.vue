<script setup>
const props = defineProps({
  nama: String,
  JenisTanaman: String,
  MasaTanam: String,
  imageUrl: String,
  gradient: {
    type: Boolean,
    default: false
  }
})

const getImageUrl = () => {
  return new URL(`../../assets/plants/${props.imageUrl}`, import.meta.url)
}
</script>

<template>
  <div
    class="
      snap-center 
      min-w-[180px] sm:min-w-[220px] md:min-w-[250px]
      w-[180px] sm:w-[220px] md:w-[250px]
      rounded-2xl shadow-md 
      p-3 sm:p-4 flex gap-3 items-start
      transition-all duration-200 hover:shadow-xl
    "
    :class="gradient
      ? 'bg-gradient-to-br from-emerald-600 to-emerald-400 text-white'
      : 'bg-white border border-gray-200 text-gray-800'"
  >
    <img
      :src="getImageUrl()"
      class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border"
      alt="plant image"
    />

    <div class="flex flex-col">
      <h2 class="font-semibold text-sm sm:text-base leading-tight">
        {{ props.nama }}
      </h2>

      <p class="text-[11px] sm:text-sm mt-1 opacity-90 leading-snug">
        Jenis Tanaman <br />
        {{ props.JenisTanaman }}
      </p>

      <p v-if="props.MasaTanam" class="text-[11px] sm:text-sm mt-1 opacity-80 leading-snug">
        {{ props.MasaTanam }}
      </p>
    </div>
  </div>
</template>
