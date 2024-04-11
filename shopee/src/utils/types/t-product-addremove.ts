
export type TProductAddRemove = {
  id: number;
  key: number;
  name: string;
  price: number;
  descr: string;
  img: string;
  addProduct: (props: number) => void;
  removeProduct: (props: number) => void;
};