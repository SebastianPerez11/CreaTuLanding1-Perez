import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-10 flex gap-10">
      {/* Imagen del producto */}
      <img src={product.imageUrl} className="w-96 rounded" alt={product.name} />

      <div>
        {/* Información del producto */}
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl mt-4">${product.price}</p>
        <p className="mt-2">Tamaño: {product.size}</p>
        <p className="mt-2 text-gray-600">Stock disponible: {product.stock}</p>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-4 mt-6">
          <span className="font-semibold">Cantidad:</span>
          <button 
            onClick={handleDecrease}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="font-bold text-lg w-8 text-center">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>

        {/* Botón agregar al carrito */}
        <button
          onClick={() => addToCart(product, quantity)}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mt-6"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;


