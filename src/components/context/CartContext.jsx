import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //if there is any saved data it updates them with those values
  //this way the user is able to get back to where they left off 
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      if (savedCart) {
        setCart(savedCart);
      } else {
        const newCart = [];
        saveToStorage(newCart);
      }
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
    }
  }, []);

  const saveToStorage = (cart) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(`Error saving to localStorage: ${error}`);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      );
      let newCart;
      if (existingProduct) {
        newCart = prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      saveToStorage(newCart);
      return newCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      );
      let newCart;
      if (existingProduct) {
        newCart = prevCart
          .map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        newCart = prevCart;
      }
      saveToStorage(newCart);
      return newCart;
    });
  };

  const updateCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      );
      let newCart;
      if (existingProduct) {
        newCart = prevCart
          .map((item) =>
            item.name === product.name ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        newCart = [...prevCart, { ...product, quantity }];
      }
      saveToStorage(newCart); 
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.location.reload();
  };
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const getItemQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };


  const values = {
    cart,
    addToCart,
    removeFromCart,
    updateCart,
    clearCart,
    getCartTotal,
    getTotalItems,
    getItemQuantity
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
