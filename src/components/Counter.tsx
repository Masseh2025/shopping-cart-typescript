import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Decrement from "/assets/images/icon-decrement-quantity.svg";
import Increment from "/assets/images/icon-increment-quantity.svg";

type CounterProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function Counter({ setIsActive }: CounterProps) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 0) setIsActive(false);
  }, [setIsActive, count]);

  return (
    <div className="flex items-center w-full justify-between">
      <button
        className="cursor-pointer w-4 h-4 rounded-full"
        onClick={() => setCount((count) => count - 1)}
      >
        <img src={Decrement} alt="decrement button" />
      </button>
      <span>{count}</span>
      <button
        className="cursor-pointer w-4 h-4 rounded-full"
        onClick={() => setCount((count) => count + 1)}
      >
        <img src={Increment} alt="decrement button" />
      </button>
    </div>
  );
}

export { Counter };
