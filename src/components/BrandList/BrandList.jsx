import {useEffect, useState} from "react";
import {getProductsByBrand } from "../../asyncMock.js";
import Loading from "../../assets/loading-gif.gif";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";

export default function BrandList() {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { brandId } = useParams()

    useEffect(() => {
        setProduct([]);
        setLoading(true);
        getProductsByBrand(brandId)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                setLoading(false)
            })
    }, [brandId]);

    return (
        <div className='list-container container'>
            <h1>{`Lista de ${brandId}`}</h1>
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