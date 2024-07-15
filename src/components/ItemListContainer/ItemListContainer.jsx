import { getProducts } from "../../asyncMock.js";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from '../../assets/loading-gif.gif';

export default function ItemListContainer() {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getProducts().then((res)=>{
            setProduct(res)
        })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    return (
        <div className='list-container container'>
            <h1>Lista de Productos</h1>
            {
                loading &&
                <div className="loading">
                    <img src={Loading} alt=""/>
                </div>
            }
            <ItemList products={ products } />
        </div>
    )
}
