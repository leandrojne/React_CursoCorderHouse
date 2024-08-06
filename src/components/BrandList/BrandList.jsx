import {useEffect, useState} from "react";
import Loading from "../../assets/loading-gif.gif";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage.jsx";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/config.js";
import {useNotificarions} from "../../hooks/useNotificarions.js";

export default function BrandList() {
    const { setNoti } = useNotificarions()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [brandOk, setBrandOk] = useState(true)
    const { brandId } = useParams()

    useEffect(() => {
        setProducts([]);
        setLoading(true);

        const productsRef = collection( db, "products")
        const q = query(productsRef, where("brand", "==", brandId))

        getDocs(q)
            .then((res)=>{
                const product = res.docs.map((info) => {
                    return {...info.data(), id: info.id}
                })

                if(product <= 0){
                    setBrandOk(true);
                } else {
                    setProducts(product);
                    setBrandOk(false);
                }

            })
            .catch(error => setNoti(error, 'error'))
            .finally(()=>{
                setLoading(false)
            })
    }, [brandId]);

    const showBrand = () => {
        if(loading){
            return (
                <div className="loading">
                    <img src={Loading} alt=""/>
                </div>
            )
        } else if (brandOk) {
            return (<NotFoundPage />)
        } else {
            return (
                <>
                    <h1>{`Lista de ${brandId}`}</h1>
                    <ItemList products={products}/>
                </>
            )
        }

    }

    return (
        <div className='list-container container'>
            {showBrand()}
        </div>
    )
}