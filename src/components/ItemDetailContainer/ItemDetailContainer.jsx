import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import Loading from "../../assets/loading-gif.gif";
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../firebase/config.js";
import {useNotificarions} from "../../hooks/useNotificarions.js";


export default function ItemDetailContainer() {
    const { setNoti } = useNotificarions()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()


    useEffect(() => {
        const productRef = doc( db, "products", productId)

        getDoc(productRef)
            .then((res)=>{
                let product = {...res.data(), id: res.id}
                setProduct(product)
            })
            .catch(error => setNoti(error, 'error'))
            .finally(()=>{
                setLoading(false)
            })
    }, [productId]);


    return (
        <div className='main-content container'>
            {
                loading ?
                <div className="loading">
                    <img src={ Loading } alt=""/>
                </div>
                 :
                <ItemDetail item={ product } />
            }
        </div>
    )
}
