import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { addToCart, removeFromCar, decreaseQuantity, clearCart, state } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCar,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
