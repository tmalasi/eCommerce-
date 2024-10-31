import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]); 

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.name === product.name
            );
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.name === product.name
            );
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity - quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart , removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
