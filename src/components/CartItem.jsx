import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.imageUrl} alt={item.name} className="w-20"/>
        <div>
          <h2 className="font-bold">{item.name}</h2>
          <p>Cantidad: {item.quantity}</p>
          <p className="font-bold">${item.price * item.quantity}</p>
        </div>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
