import data from "../data/data.json";
import CartButton from "../components/CartButton";
function ItemGrid() {
  return (
    <div className="grid grid-col-1 h-full overflow-y-scroll">
      <ul>
        {data.map((data) => {
          return (
            <li key={data.name} className="p-4 flex flex-col">
              <div className="flex relative justify-center mb-8">
                <img src={data.image.mobile} alt={data.name} />
                <div className="absolute bottom-0 translate-y-1/2">
                  <CartButton />
                </div>
              </div>
              <div>
                <p className="text-sm">{data.category}</p>
                <p>{data.name}</p>
                <p>{data.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { ItemGrid };
