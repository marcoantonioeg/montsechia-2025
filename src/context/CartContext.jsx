import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if ((product.notaPersonalizada || product.nombrePersonalizado || 
           product.postalNota || product.molduraNota || product.floresSeleccionadas || 
           product.fotoId || product.enmarcarFotoId) && !product.images) {
        if (prevCart.length === 0) return prevCart;
        
        const lastIndex = prevCart.length - 1;
        const updatedCart = [...prevCart];
        updatedCart[lastIndex] = {
          ...updatedCart[lastIndex],
          ...product
        };
        return updatedCart;
      }

      const productWithImage = {
        ...product,
        image: product.images ? product.images[0] || '/images/default.png' : '/images/default.png',
        quantity: product.quantity || 1
      };

      return [...prevCart, productWithImage];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === productId);
      if (productIndex === -1) return prevCart;

      const updatedCart = [...prevCart];
      const product = updatedCart[productIndex];

      if (product.quantity > 1) {
        updatedCart[productIndex] = { ...product, quantity: product.quantity - 1 };
      } else {
        updatedCart.splice(productIndex, 1);
      }

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1), 
    0
  );

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      total,
      setCart
    }}>
      {children}
    </CartContext.Provider>
  );
};