import {Link} from "react-router-dom";
import DeleteItemMinicart from "../DeleteItemMinicart/DeleteItemMinicart.jsx";

export default function ItemMinicart({item}) {
    const total = item.qty * item.price
    return (
        <div className='minicart-item'>
            <DeleteItemMinicart id={item.id} name={item.name} />
            <div className="img">
                <img src={item.image} alt=""/>
            </div>
            <div className="info-item">
                <div className="item-name">
                    {
                        <Link to={`/item/${item.id}`}>
                            {item.name}
                        </Link>
                    }
                </div>
                <div className="qty">qty: <span>{item.qty}</span></div>
                <div className="single-price">price: <span>${item.price.toLocaleString()}</span></div>
                <div className="total-price">SubTotal: <span>${total.toLocaleString()}</span></div>
            </div>
        </div>
    )
}
