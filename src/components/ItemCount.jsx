import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [qty, setQty] = useState(1);

  const increase = () => {
    if (qty < stock) setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <button onClick={decrease} className="px-3 py-1 bg-gray-300">-</button>
      <span className="text-xl">{qty}</span>
      <button onClick={increase} className="px-3 py-1 bg-gray-300">+</button>

      <button className="ml-4 bg-white text-black px-4 py-1 rounded">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
