const CartWidget = () => {
  return (
    <div className="bg-[#D4AF37] flex items-center justify-center px-6 py-1 rounded-sm">
      <img src="src/assets/svg/IconCart.svg" className="w-6 " alt="" />
      <span className="text-[#1a1a1a] font-bold text-xl mb-0.5">0</span>
    </div>
  );
};

export default CartWidget;
