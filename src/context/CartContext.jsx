import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 👉 Función para agregar productos al carrito
  const addToCart = (product) => {
    const productWithImage = {
      ...product,
      image: product.images ? product.images[0] || '/images/default.png' : '/images/default.png'
    };

    setCart((prevCart) => {
      const updatedCart = [...prevCart];

      // Si la cantidad es mayor a 1, agregamos el mismo producto tantas veces como la cantidad
      for (let i = 0; i < productWithImage.quantity; i++) {
        updatedCart.push({ ...productWithImage, quantity: 1 });
      }

      return updatedCart;
    });
  };

  // 👉 Eliminar un producto del carrito
  // Eliminar un producto del carrito
// 👉 Eliminar un producto del carrito
const removeFromCart = (productId) => {
  setCart((prevCart) => {
    // Buscamos el índice del producto en el carrito
    const productIndex = prevCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      // Si encontramos el producto
      const updatedCart = [...prevCart];
      const product = updatedCart[productIndex];

      if (product.quantity > 1) {
        // Si la cantidad es mayor que 1, decrementamos la cantidad
        updatedCart[productIndex] = { ...product, quantity: product.quantity - 1 };
      } else {
        // Si la cantidad es 1, eliminamos el producto del carrito
        updatedCart.splice(productIndex, 1);
      }

      return updatedCart;
    }

    // Si no encontramos el producto, devolvemos el carrito sin cambios
    return prevCart;
  });
};


  // 👉 Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // 👉 Calcular el total del carrito
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1), 
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
