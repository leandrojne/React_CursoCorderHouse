import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById} from "../../asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import Loading from "../../assets/loading-gif.gif";


export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                setLoading(false)
            })
    }, [productId]);


    return (
        <div className='main-content container'>
            {
                loading ? (
                <div className="loading">
                    <img src={Loading} alt=""/>
                </div>
                ) : (
                    <ItemDetail {...product} />
                )
            }

        </div>
    )
}
