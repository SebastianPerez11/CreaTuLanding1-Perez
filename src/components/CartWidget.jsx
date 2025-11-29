import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import IconCart from "/assets/svg/IconCart.svg";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  // No mostrar si el carrito está vacío
  if (totalQuantity === 0) return null;

  return (
    <Link to="/cart">
      <div className="bg-[#D4AF37] flex items-center justify-center px-6 py-1 rounded-sm cursor-pointer hover:bg-[#c9a332] transition">
        <img src={IconCart} className="w-6" alt="Carrito" />
        <span className="text-[#1a1a1a] font-bold text-xl mb-0.5">
          {totalQuantity}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;