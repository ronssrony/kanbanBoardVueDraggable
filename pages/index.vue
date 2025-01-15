<template>
  <div class="parent flex flex-col items-center p-10 gap-10 w-full  min-h-screen max-w-[1300px]">
    <h2 class="text-6xl font-bold tracking-wider text-white/95 "> Kanban Board </h2>
     <AddProgress />
    <div class="flex max-md:flex-col gap-14">
   <ProgressCard/>
   <TestCard/>
   <DoneCard/>
    </div>
   
  </div>
</template>

<script setup>

</script>

<style>

.parent{
    color: black;
}
.list {
  padding: 10px;
 
  border-radius: 4px;
}
</style>
