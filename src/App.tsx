import { useState } from "react";
import { ItemGrid } from "./layouts/ItemGrid";
import { CartProvider } from "./lib/CartProvider";

function App() {
  const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <CartProvider.Provider value={{ itemsInCart, setItemsInCart }}>
      <main className="bg-rose-50 h-screen font-display flex justify-center items-center">
        <ItemGrid />
      </main>
    </CartProvider.Provider>
  );
}
export default App;
