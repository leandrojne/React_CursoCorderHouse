import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext.jsx";
import { HiOutlineX, HiShoppingCart } from "react-icons/hi";
import ItemMinicart from "../ItemMinicart/ItemMinicart.jsx";
import {Link} from "react-router-dom";
import GrandTotals from "../GrandTotals/GrandTotals.jsx";

export default function CartWidget() {
    const [cart ] = useContext(CartContext)
    const [cartVisible, setCartVisible] = useState(true)

    const viewMinicar = () => {
        setCartVisible(!cartVisible)
    }

    const closeMiniCart =() => {
        setCartVisible(!cartVisible)
    }

    const itemsInCart = () => {
        if (cart.length < 1) {
            return <div className='cart-empty'>No hay productos en el carrito</div>
        } else {
            return cart.map(item => <ItemMinicart key={item.id} item={item}/>)
        }
    }


    return (
        <div className='minicart'>
            <div className="minicart-content" onClick={viewMinicar}>
                <div className="icon">
                    <HiShoppingCart />
                </div>
                <div className="items">
                    <span>{cart.length}</span>
                </div>
            </div>
            <div className={`minicart-products ${cartVisible ? 'no-active' : 'active'}`}>
                <div className="close" onClick={viewMinicar}>
                    <HiOutlineX />
                </div>
                <h2><span><HiShoppingCart /></span> Productos: {cart.length}</h2>
                <div className="content-products">
                    {itemsInCart()}
                </div>
                <div className='grand-total'>
                    <span className='title'>Total: </span> <span className='totals'> $ {GrandTotals(cart)} </span>
                </div>
                <Link to="/cart" onClick={closeMiniCart} className='btn primary checkout'>
                    Ir al carrito
                </Link>
            </div>
        </div>
    )
}
