import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0)
    return <h2 className="p-10 text-2xl">Tu carrito está vacío 🛒</h2>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice}
        </h2>

        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-6 py-2 rounded"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
