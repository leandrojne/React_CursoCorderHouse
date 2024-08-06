import {useContext} from "react";
import {CartContext} from "../../../context/CartContext.jsx";
import {ItemCartPage} from "../../ItemCartPage/ItemCartPage.jsx";
import SummaryCart from "../../SummaryCart/SummaryCart.jsx";
import {Link} from "react-router-dom";


export function Cart() {
    const [cart] = useContext(CartContext)

    return (
        <div className='container cart-page'>
            <h1>Carrito de Compras</h1>
            {
                cart.length < 1
                    ? <div className='container cart-empty'>
                        <div>
                            <h3>No hay productos en el carrito</h3>
                            {<Link to='/' className='btn primary'>Ir a Comprar</Link>}
                        </div>
                        </div>
                    : <div className="container">
                        <div className="cart-table">
                            <div className="titles">
                                <div className="product">Producto</div>
                                <div className="price">Precio</div>
                                <div className="qty">Cantidad</div>
                                <div className="subtotal">Subtotal</div>
                                <div className="actions"></div>
                            </div>
                            <div className="products-cart">
                                {cart.map((item) => <ItemCartPage key={item.id} item={item}/>)}
                            </div>
                        </div>
                        {SummaryCart(cart, true)}
                    </div>
            }
        </div>
    )
}
