import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Decrement from "/assets/images/icon-decrement-quantity.svg";
import Increment from "/assets/images/icon-increment-quantity.svg";
import { CartProvider } from "../lib/CartProvider";

type CounterProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function Counter({ setIsActive }: CounterProps) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 0) setIsActive(false);
  }, [setIsActive, count]);

  const { itemsInCart, setItemsInCart } = useContext(CartProvider);
  console.log(itemsInCart);

  return (
    <div className="flex items-center w-full justify-between">
      <button
        className="cursor-pointer w-4 h-4 rounded-full"
        onClick={() => {
          setCount((count) => count - 1);
          setItemsInCart((item) => item - 1);
        }}
      >
        <img src={Decrement} alt="decrement button" />
      </button>
      <span>{count}</span>
      <button
        className="cursor-pointer w-4 h-4 rounded-full"
        onClick={() => {
          setCount((count) => count + 1);
          setItemsInCart((item) => item + 1);
        }}
      >
        <img src={Increment} alt="decrement button" />
      </button>
    </div>
  );
}

export { Counter };
