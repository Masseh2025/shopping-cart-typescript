import { useState } from "react";
import { cn } from "../lib/utils";
import Cart from "/assets/images/icon-add-to-cart.svg";
import { Counter } from "./Counter";

export default function CartButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive(true)}
      className={cn(
        "w-40 whitespace-break-spaces flex items-center justify-center cursor-pointer rounded-full bg-white border-1 border-rose-400 font-semibold px-4.5 py-2.5 hover:text-red transition-colors duration-300 ease-out",
        {
          "bg-red text-white hover:text-white cursor-default": isActive,
        }
      )}
    >
      {!isActive ? <img src={Cart} alt="cart button" className="mr-2" /> : null}
      {!isActive ? "Add to cart" : null}
      {isActive ? <Counter setIsActive={setIsActive} /> : null}
    </div>
  );
}
