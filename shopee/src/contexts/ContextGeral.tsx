import { ReactElement, createContext } from "react";
import { TPersistentData } from "@/utils/types/TPersistentData";
import { useSelectProduct } from "@/hooks/useSelectProduct";

const PersistentData = createContext<TPersistentData>({} as any);
export default PersistentData;

export function ContextGeral(props: {children: ReactElement}) {
  const {selectedUnits, addProduct, removeProduct} = useSelectProduct();

  return(
    <PersistentData.Provider value={{selectedUnits, addProduct, removeProduct}}>
      {props.children}
    </PersistentData.Provider>
  );
};