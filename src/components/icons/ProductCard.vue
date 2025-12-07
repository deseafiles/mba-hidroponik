<template>
  <div 
    class="w-full border border-green-700 rounded-3xl bg-white shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
    @click="$emit('open')"
  >
    <div class="w-full h-48 overflow-hidden rounded-t-3xl">
      <img 
        :src="getImageUrl()" 
        alt="Gambar Tanaman"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-4 space-y-1">
      <p class="text-lg font-bold text-green-800">
        {{ nama }}
      </p>
      <p class="text-sm text-green-700">
        Jenis: <span class="font-medium">{{ JenisTanaman }}</span>
      </p>
      <p class="text-sm text-green-700">
        Masa Tanam: <span class="font-medium">{{ MasaTanam }} hari</span>
      </p>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: String,
  nama: String, 
  JenisTanaman: String,
  MasaTanam: String
})

const getImageUrl = () => {
  return new URL(`../../assets/plants/${props.imageUrl}`, import.meta.url)
}

const onClick = () => {
  
}
</script>
