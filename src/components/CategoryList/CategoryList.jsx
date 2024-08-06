import {useEffect, useState} from "react";
import Loading from "../../assets/loading-gif.gif";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage.jsx";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/config.js";
import {useNotificarions} from "../../hooks/useNotificarions.js";

export default function CategoryList() {
    const { setNoti } = useNotificarions()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [categoryOk, setCategoryOk] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setProducts([]);
        setLoading(true);

        const productsRef = collection( db, "products")
        const q = query(productsRef, where("category", "==", categoryId))

        getDocs(q)
            .then((res)=>{
                const product = res.docs.map((info) => {
                    return {...info.data(), id: info.id}
                })

                if(product <= 0){
                    setCategoryOk(true);
                } else {
                    setProducts(product)
                    setCategoryOk(false);
                }

            })
            .catch(error => setNoti(error, 'error'))
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId]);

    const showCategory = () => {
        if(loading){
            return (
                <div className="loading">
                    <img src={Loading} alt=""/>
                </div>
            )
        } else if (categoryOk) {
            return (<NotFoundPage />)
        } else {
            return (
                <>
                    <h1>{`Lista de ${categoryId}`}</h1>
                    <ItemList products={products}/>
                </>
            )
        }

    }

    return (
        <div className='list-container container'>
            {showCategory()}
        </div>
    )
}