import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext.jsx";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import {useNotificarions} from "../../hooks/useNotificarions.js";

export default function AddToCart({item}) {
    const { setNoti } = useNotificarions()
    const [count, setCount] = useState(1)
    const [cart, setCart] = useContext(CartContext)

    function handleClickMore() {
        if (count < item.stock && count !== '') {
            setCount(count => count + 1)
        } else {
            setCount(1)
        }
    }
    function handleClickLess() {
        if (count > 1) {
            setCount(count => count - 1)
        } else if(count === ''){
            setCount(1)
        }
    }

    const inputChange = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1){
            setCount(1)
        } else if(value > item.stock) {
            setCount(item.stock)
        }  else if (isNaN(value)){
            setNoti('Debes Agregar una cantidad válidad', 'error')
            setCount('')
        } else {
            setCount(value)
        }
    }

    function addItem() {
        if(count < 1 || count === '' ) {
            setNoti('Por favor agregue una cantidad!', 'error')
        } else {
            const isInCart = (itemId) => {
                return cart.some(prod => prod.id === itemId)
            };
            const updateItemCart = (id) => {
                const productoInCart = cart.filter(item => item.id === id)
                if(productoInCart[0].qty + count > item.stock) {
                    setNoti(`Perdon, solo podes agreguar al carrito ${item.stock} items de este producto y en carrito ya tenes agregado ${productoInCart[0].qty} items`,'warning');
                } else {
                    productoInCart[0].qty = productoInCart[0].qty + count
                    setNoti(`El producto "${item.name}" fue actualizado en el carrito`, 'success')
                    return setCart(currentItems => [...currentItems])
                }
            }

            if(!isInCart(item.id)){
                item.qty = count
                item.finalprice = count * item.price
                setCart(currentItems => [...currentItems, item])
                setCount(1)
                setNoti(`El Producto "${item.name}" fue agregado al carrito`, 'success')

            } else {
                updateItemCart(item.id)
                setCount(1)

            }

        }
    }

    return (
        <>
            {
                item.stock > 0 ?
                    <div className="addtocart">
                        <div className="qty">
                            <span className='link-action less' onClick={handleClickLess}><HiOutlineMinus/></span>
                            <input type="number" name='qty' value={count} onChange={inputChange}/>
                            <span className='link-action more' onClick={handleClickMore}><HiOutlinePlus/></span>
                        </div>
                        <div className="add">
                            <button className='btn primary' onClick={addItem}>Agregar al Carrito</button>
                        </div>
                    </div>
                    :
                    <div className="outofstock">
                        <div className='btn primary'>Producto sin Stock</div>
                    </div>
            }
        </>
    )
}
