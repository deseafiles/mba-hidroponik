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
    class="w-52 sm:w-64 
           h-32 sm:h-36   
           rounded-2xl shadow-md p-3 sm:p-4 
           flex gap-2 sm:gap-3 items-start
           transition-all duration-200 hover:shadow-xl"
    :class="gradient
      ? 'bg-gradient-to-br from-emerald-600 to-emerald-400 text-white'
      : 'bg-white border border-gray-200 text-gray-800'"
  >
    <img
      :src="getImageUrl()"
      class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border"
      alt="plant image"
    />

    
    <div class="flex flex-col">
      <h2 class="font-semibold text-xs sm:text-sm">
        {{ props.nama }}
      </h2>

      <p class="text-[10px] sm:text-xs mt-1 opacity-90 leading-snug">
        Jenis Tanaman <br />
        {{ props.JenisTanaman }}
      </p>

      <p v-if="props.MasaTanam" class="text-[10px] sm:text-[11px] mt-1 opacity-80">
        {{ props.MasaTanam }}
      </p>
    </div>
  </div>
</template>
