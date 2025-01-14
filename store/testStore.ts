import { defineStore } from 'pinia'
import type dataType from "../interface/dataType";
export const useMyTestStore = defineStore("defineTestStore", ()=>{
    const testItems = ref<dataType[]>([]); 
  
        testItems.value = UsegetItem("test")
        
         const addComment = (value: dataType) => {
           const existingProduct = testItems.value.filter(
             (item) => item.name !== value.name
           );
             existingProduct.push({ name: value.name, comment: value.comment });
             useSetItem("test", existingProduct);
           
         };

        const addtest = (value:dataType[])=>{
              useSetItem("test" ,value) ;
        }
     
      
  
        return { testItems, addtest , addComment };
})
