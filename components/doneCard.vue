<template>
  <div class="flex flex-col items-center w-80 relative rounded-xl bg-white min-h-40">
  <h1 class="bg-[#89f48f] text-2xl w-full text-center rounded-tr-xl rounded-tl-xl  font-bold tracking-tighter px-5 py-2 text-black/75">Done</h1>
  <Draggable drag-class="drag" ghost-class="ghost" group="item" v-model="done" itemKey="id"  class="list flex flex-col gap-4 w-full h-full  " >
      <template #item="{ element }" >
            <TestAndDoneCard :element="element"/>
      </template>
    </Draggable>
 </div>
</template>

<script lang="ts" setup>

import Draggable from "vuedraggable"
import { useMyDoneStore } from "~/store/doneStore";
import type dataType from '../interface/dataType'
import TestAndDoneCard from "./testAndDoneCard.vue";
 const useDoneStore = useMyDoneStore() ;
 const done = ref<dataType[]>(useDoneStore.doneItems)
  
  watch(done , ()=>{
      useDoneStore.addDone(done.value); 
  })
</script>

<style scoped>

.drag {
  transform: scale(1.05);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #89f48f;
  opacity: 0.9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ghost {
  background-color: rgba(200, 200, 200, 0.5);
  border: 2px dashed #ccc;
  transform: scale(0.98);
  transition: transform 0.2s ease;
  opacity: 0.7;
}


</style>