<script setup>
  const props = defineProps({
    nama: String,
    JenisTanaman: String,
    MasaTanam: String
  })

  console.log(props)
</script>

<template>
 <div>
  <p>{{nama}}</p>
  <p>{{ JenisTanaman }}</p>
  <p>{{ MasaTanam }}</p>
 </div> 
</template>

