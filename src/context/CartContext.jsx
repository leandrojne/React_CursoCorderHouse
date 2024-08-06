import {createContext, useEffect, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const minicartLocalStorage = JSON.parse(localStorage.getItem('MiniCart')) || []
        if(minicartLocalStorage.length > 0){
            setCart(minicartLocalStorage)
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('MiniCart', JSON.stringify(cart))
    }, [cart])


    return(
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}