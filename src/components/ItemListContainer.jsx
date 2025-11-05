import perfumesData from "../data/perfumesData";
import { Link } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  
  return (
    <>
      <div className="p-10 font-bold text-3xl">
        <h2>{greeting}</h2>
      </div>

      <div className="grid grid-cols-5 px-10 gap-5">
        {perfumesData.map(({ id, name, size, price, imageUrl }) => (
          <div
            className="w-full flex flex-col bg-[#1a1a1a] text-white py-6 px-6 "
            key={id}
          >
            <header className=" grow flex flex-col">
                 <Link to={`/catalogo/${id}`} className="cursor-pointer">
              <img
                className="w-full object-cover mb-4"
                src={imageUrl}
                alt={name}
              />
              <h1 className="text-xl font-bold mb-4 grow ">{name}</h1>
              <p className="mb-6  text-base font-bold bg-white text-black inline-block px-4 rounded-full w-max">
                {size}
              </p>
              </Link>
            </header>

            <footer className="flex  justify-between items-center">
              <span className="text-2xl font-bold">${price}</span>
              <button className="bg-white text-black font-bold px-4 py-1.5 rounded-sm cursor-pointer">
                Agregar al Carrito
              </button>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
