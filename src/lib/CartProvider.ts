import { createContext, Dispatch, SetStateAction } from "react";

type CartProviderProps = {
  itemsInCart: number;
  setItemsInCart: Dispatch<SetStateAction<number>>;
};

const CartProvider = createContext<CartProviderProps | null>(null);

export { CartProvider };
