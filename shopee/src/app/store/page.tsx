'use client';
import Link from "next/link";
import { useContext } from "react";
import { MusicalInstrumentsList } from "../../components/MusicalInstrumentsList";
import { CarToBuyProducts } from "../../components/CarToBuyProducts";
import PersistentData from "@/contexts/ContextGeral";

export default function StorePage() {
  const {selectedUnits, addProduct, removeProduct} = useContext(PersistentData);

  return (
    <div>
      <div className={`flex flex-col`}>
        <Link className={`ml-5 mt-5`} href='/'>Home</Link>
        <div className={`flex justify-center`}>
          <h1 className={`mainTitle text-3xl p-4 text-center m-3 mt-7 mb-2 
          text-red-700 font-black bg-orange-300 w-[290px] border-[4px] 
          border-red-700 rounded-2xl`}>
            Shopee Store
          </h1>
        </div>
        <CarToBuyProducts arrayBuys={selectedUnits}/>
      </div>
      <MusicalInstrumentsList 
        addProduct={addProduct} 
        removeProduct={removeProduct}/>
    </div>
  );
};