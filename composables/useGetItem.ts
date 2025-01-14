export const UsegetItem = (key:string) => {

   try{
      return JSON.parse(localStorage.getItem(`${key}`) || '"');
   }
   catch{
     return []
   }
   
}
