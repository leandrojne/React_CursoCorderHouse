import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function ItemDetail({item}) {
    return (
        <div className='product-detail-content'>
            <div className="breadcrumbs">
                <Link to='/'>
                    Home
                </Link>
                <span>|</span>
                <Link to={`/category/${item.category}`}>
                    {item.category}
                </Link>
                <span>|</span>
                <span className='item'>{item.name}</span>
            </div>
            <div className="product-image">
                <img src={item.image} alt=""/>
            </div>
            <div className="product-info">
                <div className="product-name">
                    <h1>{item.name}</h1>
                    <span className='brand'>
                        MARCA: <strong>
                            <Link to={`/brand/${item.brand}`}>
                                {item.brand}
                            </Link>
                        </strong>  |
                        CATEGORÍA: <strong>
                            <Link to={`/category/${item.category}`}>
                                {item.category}
                            </Link>
                        </strong>
                    </span>
                </div>
                <div className="prices-stock">
                    <span className='price'>$ {item.price.toLocaleString()}</span>
                    <span className='stock'>Stock: {item.stock}</span>
                </div>
                <AddToCart item={item}/>
                <div className="description">
                    {item.description}
                </div>
            </div>
        </div>
    )
}