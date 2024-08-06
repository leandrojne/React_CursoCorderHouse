import React, {useContext} from 'react'
import {HiOutlineTrash} from "react-icons/hi";
import {CartContext} from "../../context/CartContext.jsx";
import {useNotificarions} from "../../hooks/useNotificarions.js";

export default function DeleteItemMinicart({id, name}) {
    const { setNoti } = useNotificarions()
    const [cart, setCart] = useContext(CartContext)

    const removeItem = (idRemove) => {
        const productoInCart = cart.filter(item => item.id !== idRemove)
        setCart(productoInCart)
        setNoti(`El producto "${name}" fue eliminado del carrito`, 'info')
    }

    return (
        <div className="remove" onClick={()=>{removeItem(id)}}>
            <HiOutlineTrash/>
        </div>
    )
}
