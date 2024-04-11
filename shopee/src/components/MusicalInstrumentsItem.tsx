'use client'
import Image from 'next/image';
import CurrencyFormat from '../utils/funcs/CurrencyFormat';
import { Button } from './Button';
import { TProductAddRemove } from '../utils/types/t-product-addremove';

const MusicalInstrumentsItem = (props: TProductAddRemove) => 
  <article className={`cardProduct flex flex-col justify-center m-3 p-1
  border-[1px] border-yellow-700 w-[15%] rounded-lg overflow-hidden`}>
    <div className={`flex justify-center`}>
      <Image 
        priority
        src={props.img} 
        width={300} 
        height={300} 
        alt={`Imagem do ${props.name}.`}
      />
    </div>
    <div className={`containerNamePrice justify-between w-[100%] font-semibold 
    first-letter:border rounded-md bg-red-900 text-yellow-600 mt-1 p-1`}>
      <h2 className={`productName`}>{props.name}</h2>
      <p className={`producPrice`}>{CurrencyFormat
        .getCurrencyFormat(props.price)}
      </p>
    </div>
    <div className={`flex justify-between border-b-[2px] w-[100%] 
    border-orange-300 rounded-md overflow-hidden mt-1 p-1 `}>
      <p className={`productDescr`}>{props.descr}</p>
    </div>
    <div className={`flex justify-between`}>
      <Button 
        isToAdd={true}
        execute={props.addProduct} 
        clickedItem={props.id}/>
      <Button 
        isToAdd={false}
        execute={props.removeProduct} 
        clickedItem={props.id}/>
    </div>
  </article>

export { MusicalInstrumentsItem };