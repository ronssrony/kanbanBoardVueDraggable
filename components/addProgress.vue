<template>
  <div>
  <form @submit.prevent="handleSubmit" action="" class="relative">
     <input type="text" name="input" placeholder="Add task in progress" class="w-96 h-10 rounded-md p-2 outline-none text-md tracking-wide text-black/70" v-model="inputText" id="">
     <button type="submit" class="bg-[#89e3f4] py-1 px-2 rounded-tr-md rounded-br-md absolute right-0 "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 15 16"><path fill="#888888" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"/></svg></button>
  </form>
  </div>
</template>

<script lang="ts" setup>
import { useMyProgressStore } from '~/store/progressStore';


const inputText = ref<string>(''); 
const useProgress = useMyProgressStore() ;
 function handleSubmit():void{
  console.log(inputText.value)

      useProgress.addItems(inputText.value); 
      console.log(useProgress.progressItems, 'this is from store value')  
      inputText.value =''
 }
</script>

<style>

</style>