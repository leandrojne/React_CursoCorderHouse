import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function ItemDetail({name, price, description, stock, image, brand, category}) {

    return (
        <div className='product-detail-content'>
            <div className="breadcrumbs">
                <Link to='/'>
                    Home
                </Link>
                <span>|</span>
                <Link to={`/category/${category}`}>
                    {category}
                </Link>
                <span>|</span>
                <span className='item'>{name}</span>
            </div>
            <div className="product-image">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <div className="product-name">
                    <h1>{name}</h1>
                    <span className='brand'>
                        MARCA: <strong>
                            <Link to={`/brand/${brand}`}>
                                {brand}
                            </Link>
                        </strong>  |
                        CATEGORÍA: <strong>
                            <Link to={`/category/${category}`}>
                                {category}
                            </Link>
                        </strong>
                    </span>
                </div>
                <div className="prices-stock">
                    <span className='price'>$ {price}</span>
                    <span className='stock'>Stock: {stock}</span>
                </div>
                <AddToCart productQty={stock}/>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}
