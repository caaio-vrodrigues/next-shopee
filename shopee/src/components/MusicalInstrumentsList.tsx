'use client';
import { MusicalInstrumentsItem } from "./MusicalInstrumentsItem";
import { musicalInstrumentsProducts } from "../data/musical-instruents-products";
import { TAddRemove } from "../utils/types/t-add-remove";

const MusicalInstrumentsList = (props: TAddRemove) => {
  const renderProducts = () => musicalInstrumentsProducts.map(instrument => 
    <MusicalInstrumentsItem
      id={instrument.id} 
      key={instrument.id}
      name={instrument.name}
      price={instrument.price} 
      descr={instrument.descr}
      img={instrument.img}
      addProduct={props.addProduct}
      removeProduct={props.removeProduct}/>
  );

  return (
    <div className="containerProductItens flex flex-wrap justify-center m-5">
      {renderProducts()}
    </div>
  );
};

export { MusicalInstrumentsList };