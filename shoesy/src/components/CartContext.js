import React, { createContext, useState, useContext } from 'react';

//contesto del carrello
export const CartContext = createContext(); 

export const useCart = () => useContext(CartContext); //custom hook per usare contesto

//provider per il contesto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
