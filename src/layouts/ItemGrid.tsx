import data from "../data/data.json";
import CartButton from "../components/CartButton";
import { CartList } from "./CartList";

function ItemGrid() {
  return (
    <div className=" h-full overflow-y-scroll py-8">
      <h1 className="font-bold text-4xl mb-8 ml-4">Desserts</h1>
      <ul className="grid grid-cols-1 ">
        {data.map((data) => {
          return (
            <li key={data.name} className="p-4 flex flex-col">
              <div className="flex relative justify-center mb-8">
                <img
                  src={data.image.mobile}
                  alt={data.name}
                  className="rounded-md"
                />
                <div className="absolute bottom-0 translate-y-1/2">
                  <CartButton />
                </div>
              </div>
              <div className="text-rose-900">
                <p className="text-sm">{data.category}</p>
                <p className="font-semibold">{data.name}</p>
                <p className="text-red font-semibold">${data.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <CartList />
    </div>
  );
}

export { ItemGrid };
