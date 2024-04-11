import { musicalInstrumentsProducts } from "../../data/musical-instruents-products";

type TGetSelectedProduct = {
  id: number; 
  name: string; 
  price: number; 
  descr: string; 
  img: string;
};

export const getSelectedProduct = (props: {idProduct: number}): TGetSelectedProduct => {
  return musicalInstrumentsProducts.reduce((acc, product) => {
    product.id === props.idProduct ? acc = {...product} : '';
    return acc;
  }, {
      id: 0, 
      name: '', 
      price: 0, 
      descr: '', 
      img: '',
    });
};