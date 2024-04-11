'use client';
import { useState } from "react";
import { getSelectedProduct } from "@/utils/funcs/getSelectedProduct";
import { TProduct } from "@/utils/types/t-product";
import { TUnitsProductArr } from "@/utils/types/t-units-product-arr";
import { TUnitsProduct } from "@/utils/types/t-units-product";

export const useSelectProduct = () => {
  const [selectedUnits, setSelectedUnits] = useState<TUnitsProductArr>([{
    units: 0, 
    product: {descr: '', id: 0, img: '', name: '', price: 0},
  }]);

  const addProduct = (id: number) => {
    const product: TProduct = getSelectedProduct({idProduct: id});

    selectedUnits.forEach((item, i) => {
      const newProduct: TUnitsProduct = {...selectedUnits[i]};
      newProduct.units = newProduct.units + 1;

      item.product.id === product.id ? setSelectedUnits([
        ...selectedUnits.filter(item => item.product.id !== product.id),
      ].concat(newProduct)) : '';
    });

    const productExists = selectedUnits.filter(item => 
      item.product.id === product.id);

    productExists.length === 0 ? setSelectedUnits([
      ...selectedUnits.filter(item => item.product.id !== 0),
      {units: 1, product},
    ]) : '';
  };

  const removeProduct = (id: number) => {
    const product: TProduct = getSelectedProduct({idProduct: id});

    selectedUnits.forEach((item, i) => {
      const newProduct: TUnitsProduct = {...selectedUnits[i]};

      if(item.product.id === product.id){
        if(newProduct.units === 0){return};
  
        newProduct.units = newProduct.units - 1;
  
        const newProductToArray: TUnitsProduct[] = [newProduct];
  
        setSelectedUnits([
          ...selectedUnits.filter(item => item.product.id !== product.id),
        ].concat(newProductToArray));
      };
    });
  };

  return{
    selectedUnits,
    addProduct,
    removeProduct,
  };
};
