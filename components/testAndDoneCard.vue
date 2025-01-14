<template >
 <div  class=" relative cursor-grab text-black/80 font-semibold p-2 rounded-md bg-slate-100 shadow-md border  ">
  {{ element.name }}
  <button @click="handleBox" class="absolute top-0 right-0 text-[12px]  shadow-inner bg-slate-200  rounded-md px-1">
   <div v-if="modal">
      add comment
   </div>
   <div v-else>
     {{ element.comment }}
   </div>
  
  </button>
   <div v-if="inputbox" class="absolute top-0 right-0 text-[12px] bg-slate-200  shadow-inner  rounded-md ">
     <form @submit.prevent="handleComment" >
       <input ref="inputref" v-model="inputText" type="text" class="inputarea w-full h-full outline-none px-2 rounded-md shadow-inner" placeholder="write comment">
     </form>
   </div>
  </div>
</template>

<script lang="ts" setup >
import { useMyTestStore } from '~/store/testStore';
const {element} = defineProps(['element'])
    const modal = ref<boolean>(true) ;
    const inputref = ref<HTMLInputElement | null>()
    const init = ()=>{
      if(element.comment!==''){
         modal.value = false ;
      }
    }
    init(); 
    const useTestStore =useMyTestStore(); 
    const inputbox = ref<boolean>(false) ;
    const inputText = ref<string>('') ;
    const handleBox = ()=>{
        inputbox.value = !inputbox.value ;
         nextTick(()=>{
            inputref.value?.focus();
         })
        
    }
    const handleComment = ()=>{
         if(inputText.value.length>0){
        useTestStore.addComment({name:element.name , comment:inputText.value})
         element.comment = inputText.value
         modal.value = !true ;
        inputbox.value=!inputbox.value
         }
    }
</script>

<style>

</style>