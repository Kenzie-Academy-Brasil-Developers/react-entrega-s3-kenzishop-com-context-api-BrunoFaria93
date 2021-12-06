import { createContext, useState } from "react";
import { useContext } from 'react'

export const CartContext = createContext([]);

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
    localStorage.setItem("@Kenzieshop:cart", cart);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.title !== item.title);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, useCart };
