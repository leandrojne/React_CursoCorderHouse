import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../context/CartContext.jsx";
import DeleteItemMinicart from "../DeleteItemMinicart/DeleteItemMinicart.jsx";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { FaRegSave } from "react-icons/fa";
import {useNotificarions} from "../../hooks/useNotificarions.js";


export function ItemCartPage({item}) {
    const { setNoti } = useNotificarions()
    const [cart, setCart] = useContext(CartContext)
    const [count, setCount] =  useState(item.qty)
    const [showBtnSave, setShowBtnSave] = useState(false);

    useEffect(() => {
        setCount(item.qty)
    }, [cart]);

    function handleClickMore() {
        if (count < item.stock) {
            setCount(count => count + 1)
            setShowBtnSave(true)
        }
    }
    function handleClickLess() {
        if (count > 1) {
            setCount(count => count - 1)
            setShowBtnSave(true)
        }
    }

    function addItem() {
        const updateItemCart = (id) => {
            const productoInCart = cart.filter(item => item.id === id)
            if(count > item.stock) {
                const infoAlert = `Perdon, solo se pueden agreguar un maximo de ${item.stock} productos`
                setNoti(infoAlert, 'alert')
            } else {
                productoInCart[0].qty = count
                setNoti(`El producto "${item.name}" fue actualizado en el carrito`, 'success')
                return setCart(currentItems => [...currentItems])
            }
        }
        updateItemCart(item.id)
        setShowBtnSave(false)
    }

    return (
        <div className='product'>
            <div className="product">
                <div className="img">
                    <img src={item.image} alt=""/>
                </div>
                <div className="info">
                    <div className="name">
                        {item.name}
                    </div>
                    <div className="brand">Marca: {item.brand}</div>
                </div>
            </div>
            <div className="price"><span className='d-block d-sm-none'>Price: </span>{item.price.toLocaleString()}
            </div>
            <div className="qty">
            <div className='counter-qty'>
                    <span className='link-action less' onClick={handleClickLess}><HiOutlineMinus /></span>
                    <div className="counter">
                        {count}
                    </div>
                    <span className='link-action more' onClick={handleClickMore}><HiOutlinePlus /></span>
                </div>
            </div>
            <div className="subtotal"><span className='d-block d-sm-none'>Subtotal: </span>{(item.price * count).toLocaleString()}</div>
            <div className="actions">
                {
                    showBtnSave && <button className='save' onClick={addItem} aria-label='Guardar' title='Guardar'><FaRegSave/></button>
                }
                <DeleteItemMinicart id={item.id} name={item.name} />
            </div>
        </div>
    )
}
