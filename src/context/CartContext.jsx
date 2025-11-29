import { createContext, useContext, useState } from "react";

// ✅ Crea el contexto con undefined como valor inicial
const CartContext = createContext(undefined);

// ✅ Mejora el hook para verificar que se use dentro del Provider
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de CartProvider");
  }
  
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (product, quantity) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Eliminar producto
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Cantidad total de productos
  const totalQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Total en dinero
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};