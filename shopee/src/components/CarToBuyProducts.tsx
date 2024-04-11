import { IconShoppingCart } from "@tabler/icons-react";
import CurrencyFormat from "../utils/funcs/CurrencyFormat";
import { TCarBuys } from "../utils/types/t-carbuys";

const CarToBuyProducts = (props: TCarBuys) => {
  const renderSelectedProductsUnits = () => {
    if(props.arrayBuys[0].product.id < 1){
      return (
        <div className={`containerProductInfos border border-orange-400 m-2 
        p-2 bg-orange-300 text-red-700 rounded-[20px] w-[11%]`}>
          <h2>O Carrinho está vázio...</h2>
        </div>
      );
    };

    return props.arrayBuys.map(product => 
      <div key={product.product.id} className={`containerProductInfos border 
      border-orange-400 m-2 p-2 bg-orange-300 text-red-700 rounded-[20px] 
        w-[11%]`}>
        <h2 className={`productH2Name`}>{product.product.name}</h2>
        <p><span className={`productInfos`}>Units:</span> {product.units}</p>
        <p><span className={`productInfos`}>Total:</span> {CurrencyFormat
          .getCurrencyFormat(product.product.price * product.units)}
        </p>
      </div>
    );
  };

  return (
    <div className={`containerCar flex bg-red-700 m-10 p-5 rounded-md`}>
      <IconShoppingCart 
        className={`carProducts w-[33px] h-[33px] m-2 text-orange-300`}/>
      {renderSelectedProductsUnits()}
    </div>
  );
};

export { CarToBuyProducts };