import { defineStore } from "pinia";
import { UsegetItem } from "#build/imports";
import type dataType from "../interface/dataType";

export const useMyDoneStore = defineStore("defineDone", () => {
  const doneItems = ref<dataType[]>([]);

   doneItems.value = UsegetItem("done");

  const addDone = (value: dataType[]) => {
    useSetItem("done", value);
  };

  return { doneItems, addDone };
});
