import type dataType from "../interface/dataType";
export const useFindItem = (items: dataType[], item: dataType) => {
  const existingProduct = items.find((element) => element === item);
  return existingProduct;
};
