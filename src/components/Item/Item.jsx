import {Link} from "react-router-dom";

export default function Item({item}) {
    return (
        <div className='item'>
            <div className="img">
                <img src={item.image} alt={item.name} title={item.name}/>
            </div>
            <h2>{item.name}</h2>
            <p className='price'>$ {item.price.toLocaleString()}</p>
            <p className='brand'>
                Marca: <Link to={`/brand/${item.brand}`}>
                    {item.brand}
                </Link>
            </p>
            <Link to={`/item/${item.id}`} className='btn primary'>
                Ver Mas
            </Link>
        </div>
    )
}
