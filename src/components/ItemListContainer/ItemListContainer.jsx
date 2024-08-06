import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from '../../assets/loading-gif.gif';
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import {useNotificarions} from "../../hooks/useNotificarions.js";

export default function ItemListContainer() {

    const { setNoti } = useNotificarions()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const productsRef = collection( db, "products")

        getDocs(productsRef)
            .then((res)=>{
                let product = res.docs.map((info) => {
                    return {...info.data(), id: info.id}
                })
                setProducts(product)
            })
            .catch(error => setNoti(error, 'error'))
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
