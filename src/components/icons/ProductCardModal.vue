<script setup>
import InfoBox from './InfoBox.vue'

const props = defineProps({
  show: Boolean,
  data: Object,
})

const getImageUrl = () => {
  return new URL(`../../assets/plants/${props.data.imageUrl}`, import.meta.url)
}

const emit = defineEmits(["close"])
</script>
<template>
  <div 
    v-if="show"
    class="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50 px-4"
    @click.self="emit('close')"
  >
    <div class="bg-white rounded-2xl w-full max-w-md p-5 shadow-lg border border-green-700">
      <h2 class="text-green-800 font-bold text-xl mt-4 my-2">
        {{ data?.nama }}
      </h2>
      <img
        :src="getImageUrl()" 
        alt="Gambar Tanaman"
        class="w-full h-48 object-cover rounded-xl"
      />
      <p class="text-green-700 mt-1 text-base">
        Deskripsi Singkat <span class="font-semibold">{{ data['Keterangan Singkat'] }}</span>
      </p>
     
      <div class="flex justify-between gap-4 p-2 text-sm">
        <InfoBox class="w-1/2 py-3 px-4">
          <template #judul>Harga</template>
          <template #isi>{{ data.Harga }}</template>
        </InfoBox>

        <InfoBox class="w-1/2 py-3 px-4">
          <template #judul>Berat Satuan</template>
          <template #isi>{{ data['Berat Satuan'] }}</template>
        </InfoBox>
      </div>
      <button 
        class="mt-5 w-full bg-green-800 text-white py-2 rounded-xl hover:bg-green-800 transition"
        @click="emit('close')"
      >
        Tutup
      </button>
    </div>
  </div>
</template>
