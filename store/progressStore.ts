import { defineStore } from 'pinia'
import { UsegetItem } from '#build/imports';
import type dataType from '../interface/dataType'
export const useMyProgressStore = defineStore('defineProgress', ()=>{
      const progressItems = ref<dataType[]>([]); 
     
      progressItems.value = UsegetItem("progress")
    
      const addItems = (value:string)=>{
            const existingProduct = progressItems.value.find(item=> item.name ===value) 
            if(existingProduct){
              console.log("the product is exist in you progress")
            }
            else {
              progressItems.value?.push({name:value , comment:''}); 
              useSetItem("progress",progressItems.value)
            } 
      }
      const addProgress = (value:dataType[])=>{
            useSetItem("progress" ,value) ;
      }
   
    

      return { progressItems, addItems,  addProgress };
})
