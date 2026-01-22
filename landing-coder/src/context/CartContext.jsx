import { createContext, useState } from "react";

// 1. Asegúrate de que tenga la palabra 'export'
export const CartContext = createContext({
    cart: []
});

// 2. MUY IMPORTANTE: Asegúrate de que diga 'export const CartProvider'
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart(prev => [...prev, { ...item, quantity }]);
    };

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};