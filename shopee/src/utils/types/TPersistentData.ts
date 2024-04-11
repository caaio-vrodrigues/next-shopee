import { TUnitsProductArr } from "./t-units-product-arr"

export type TPersistentData = {
  selectedUnits: TUnitsProductArr
  addProduct: (id: number) => void
  removeProduct: (id: number) => void
};