import {useEffect, useState} from "react";
import {getProductsByCategory} from "../../asyncMock.js";
import Loading from "../../assets/loading-gif.gif";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";

export default function CategoryList() {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setProduct([]);
        setLoading(true);
        getProductsByCategory(categoryId)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId]);

    return (
        <div className='list-container container'>
            <h1>{`Lista de ${categoryId}`}</h1>
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