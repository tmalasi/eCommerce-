import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Initialize cart from local storage
    useEffect(() => {
        try {
            const savedCart = JSON.parse(localStorage.getItem("cart"));
            if (savedCart) {setCart(savedCart);}
            else{ 
                const newCart=[]
                saveToStorage(newCart)}
        } catch (error) {
            console.error(`Error reading from localStorage: ${error}`);
        }
    }, []);

    // Save cart to local storage
    const saveToStorage = (cart) => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (error) {
            console.error(`Error saving to localStorage: ${error}`);
        }
    };

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.name === product.name
            );
            let newCart;
            if (existingProduct) {
                newCart = prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                newCart = [...prevCart, { ...product, quantity }];
            }
            saveToStorage(newCart); 
            return newCart;
        });
    };

    const removeFromCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.name === product.name
            );
            let newCart;
            if (existingProduct) {
                newCart = prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity - quantity }
                        : item
                ).filter((item) => item.quantity > 0);
            } else {
                newCart = prevCart; // No change if product doesn't exist
            }
            saveToStorage(newCart); // Save to local storage immediately after updating
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
                newCart = prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity }
                        : item
                ).filter((item) => item.quantity > 0);
            } else {
                newCart = [...prevCart, { ...product, quantity }];
            }
            saveToStorage(newCart); // Save to local storage immediately after updating
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart'); 
        window.location.reload();
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
