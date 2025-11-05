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
      className="gap-10 w-full h-screen flex justify-between bg-[#1a1a1a] text-white py-6 px-10 "
      key={product.id}
    >
      <header className="w-full flex justify-center">
        <img
          className="w-full h-full object-cover mb-4"
          src={product.imageUrl}
          alt={product.name}
        />
      </header>

      <footer className="w-full flex flex-col ">
        <h1 className="text-3xl font-bold mb-4 ">{product.name}</h1>
         <span className="text-xl font-bold mb-6">${product.price}</span>
        <p className="flex flex-col gap-2 text-lg  mb-6">
          Tamaño: <span className="text-base font-bold bg-[#D4AF37] text-black inline-block px-4 rounded-full w-max"> {product.size}</span>
        </p>
        <p className="flex gap-2 text-lg flex-col mb-10"> 
          Genero: <span className="text-base font-bold bg-white text-black inline-block px-4 rounded-full w-max">{product.gender}</span> 
        </p>
        <ul className="flex gap-2">
          {product.notes.map((note) => (
            <li className="mb-6  text-base font-bold bg-white text-black inline-block px-4 rounded-md w-max">
              {note}
            </li>
          ))}
        </ul>
        <p className="mb-10  text-lg font-medium w-max">{product.description}</p>
       
        <button className="bg-white text-black font-bold px-4 py-2 rounded-sm cursor-pointer mb-6 text-lg">
          Agregar al Carrito
        </button>
        <button className="bg-[#D4AF37] text-black font-bold px-4 py-2 rounded-sm cursor-pointer text-lg mb-6" onClick={() => navigate(-1)}>
          Volver
        </button>
      </footer>
    </div>
  );
};

export default ProductsDetail;
