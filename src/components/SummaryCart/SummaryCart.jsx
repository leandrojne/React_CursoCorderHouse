import React from 'react'
import {Link} from "react-router-dom";
import GrandTotals from "../GrandTotals/GrandTotals.jsx";

function SummaryCart(itemInCart, showBtnPagar) {
    return (
        <div className="summary">
            <h2>Resumen</h2>
            {
                itemInCart.map((item) => {
                    return (
                        <div className="items" key={item.id}>
                            <div className="name">
                                {item.name}
                                <span className='qty'>Cantidad: {item.qty}</span>
                            </div>
                            <div className="total">
                                {(item.price * item.qty).toLocaleString()}
                            </div>
                        </div>
                    )
                })
            }

            <div className='grand-total'>
                <span className='title'>Total:</span> <span
                className='totals'>${GrandTotals(itemInCart)}</span>
            </div>
            { showBtnPagar &&
                <div className="checkout">
                    <Link to='/checkout' className='btn primary'>Finalizar Compra</Link>
                </div>
            }
        </div>
    )
}

export default SummaryCart
