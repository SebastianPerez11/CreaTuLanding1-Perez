import { useParams, useNavigate } from "react-router-dom";
import perfumesData from "../data/perfumesData";

const ProductsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // obtiene el id desde la URL

  // busca el producto con ese id
  const product = perfumesData.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  return (
    <div
      className="w-80 flex flex-col bg-[#1a1a1a] text-white py-6 px-6 "
      key={product.id}
    >
      <header className=" grow flex flex-col">
        <img
          className="w-full object-cover mb-4"
          src={product.imageUrl}
          alt={product.name}
        />
        <h1 className="text-xl font-bold mb-4 grow ">{product.name}</h1>
        <p className="mb-6  text-base font-bold bg-white text-black inline-block px-4 rounded-full w-max">
          {product.size}
        </p>
      </header>

      <footer className="flex  justify-between items-center">
        <span className="text-2xl font-bold">${product.price}</span>
        <button className="bg-white text-black font-bold px-4 py-1.5 rounded-sm cursor-pointer">
          Agregar al Carrito
        </button>
        <button className="cursor-pointer" onClick={() => navigate(-1)}>Volver</button>
      </footer>
    </div>
  );
};

export default ProductsDetail;
