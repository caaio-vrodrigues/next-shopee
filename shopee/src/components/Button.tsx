import { TButton } from "../utils/types/t-button";

const Button = (props: TButton) => <button 
  onClick={() => props.execute(props.clickedItem)} 
  className="bg-red-900 text-yellow-600 rounded-md p-1 m-1 mt-3 w-[49%]">
    {props.isToAdd === true ? 'Add' : 'Remove'}
  </button>

export { Button };