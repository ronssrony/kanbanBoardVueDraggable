import type dataType from "../interface/dataType";
export const useSetItem = async (key: string, value: dataType[]) => {
  try {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  } catch {
    console.log("Something Went Wrong To SetItem");
  }
};
