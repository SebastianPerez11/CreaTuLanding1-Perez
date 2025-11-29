import { Link } from "react-router-dom";

const Item = ({ id, imageUrl, name, size, price }) => {
  return (
    <div className="w-full flex flex-col bg-[#1a1a1a] text-white py-6 px-6">
      <header className="grow flex flex-col">
        <Link to={`/catalogo/${id}`} className="cursor-pointer">
          <img
            className="w-full object-cover mb-4"
            src={imageUrl}
            alt={name}
          />
          <h1 className="text-xl font-bold mb-4 grow">{name}</h1>

          <p className="mb-6 text-base font-bold bg-white text-black inline-block px-4 rounded-full w-max">
            {size}
          </p>
        </Link>
      </header>

      <footer className="flex justify-between items-center">
        <span className="text-2xl font-bold">${price}</span>

        {/* OJO: este botón no debería hacer nada todavía */}
        <button className="bg-white text-black font-bold px-4 py-1.5 rounded-sm cursor-pointer">
          Ver Detalle
        </button>
      </footer>
    </div>
  );
};

export default Item;
