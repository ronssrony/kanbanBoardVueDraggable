<template>
  <div>
   <div class="  cursor-grab text-black/80 font-semibold p-2 rounded-md bg-slate-100 shadow-md border  ">{{ element.name }}</div>  
  </div>
</template>

<script lang="ts" setup>

   const {element} = defineProps(['element'])
</script>

<style>

</style>