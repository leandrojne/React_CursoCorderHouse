import React, {useContext, useState} from 'react'
import {CartContext} from "../../../context/CartContext.jsx";
import {collection, addDoc, query, where, documentId, getDocs, doc, updateDoc} from "firebase/firestore";
import {authUsr, db} from "../../../firebase/config.js";
import SummaryCart from "../../SummaryCart/SummaryCart.jsx";
import GrandTotals from "../../GrandTotals/GrandTotals.jsx";
import ReCaptcha from "../../ReCaptcha/ReCaptcha.jsx";
import {Link} from "react-router-dom";
import {useNotificarions} from "../../../hooks/useNotificarions.js";
import Loading from "../../../assets/loading-gif.gif";
import {useUserAuth} from "../../../context/AuthUserContext.jsx";
import CheckoutForm from "../../Forms/CheckoutForm.jsx";


export default function Checkout() {
    const { userDetails } = useUserAuth()
    const { setNoti } = useNotificarions()
    const [cart, setCart] = useContext(CartContext)
    const [compraFinalizada, setCompraFinalizada ] = useState(false)
    const [idCompra, setIdCompra ] = useState('')
    const [captchaValidate, setCaptchaValidate] = useState('')
    const [loading, setLoading] = useState(false)

    const user = authUsr.currentUser;

    const ids = cart.map((item)=> item.id)
    const productsRef = collection( db, "products")
    const captchaOk = (info) => {
        setCaptchaValidate(info)
    }
    const newCheckoutUser = async (e) =>{
        e.preventDefault()

        setLoading(true)
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
        const { docs } = productsAddedFromFirestore;

        if(captchaValidate) {
            docs.forEach((item)=>{
                const dataDoc = item.data()
                const stockDB = dataDoc.stock
                const productAddedToCart = cart.find((prod) => prod.id === item.id)
                const productQuantity = productAddedToCart?.qty;

                if(stockDB >= productQuantity) {
                    const finalStock = stockDB - productQuantity
                    const idRef = doc(db, "products", productAddedToCart.id);

                    const actualizarStockProducto = async () => {
                        await updateDoc(idRef, {
                            stock: finalStock
                        });
                    }
                    actualizarStockProducto()

                    const pedido = {
                        A_Usuario: userDetails,
                        B_Productos: cart,
                        C_Total: GrandTotals(cart),
                        D_Fecha: new Date()
                    }
                    const pedidoRef = collection(db, "pedidos")
                    addDoc(pedidoRef, pedido)
                        .then(res => {
                            setIdCompra(res.id)
                        })
                        .catch((error) => {
                            setNoti('Ha ocurrido un error al generar el pedido, intentelo de nuevo','error')
                        })
                        .finally(()=>{
                            setCart([])
                            setCompraFinalizada(true)
                            setNoti(`La orden fue generada con éxito, pronto nos comunicaremos con usted.`,'success')
                            setLoading(false)
                        })
                } else {
                    setLoading(false)
                    setNoti('algunos productos no tienen stock','warning')
                }

            })

        } else {
            setLoading(false)
            setNoti('Debes validar el Captcha','error')
        }
    }

    if(loading){
        return (
            <div className="loading">
                <img src={Loading} alt=""/>
            </div>
        )
    } else {
        if(compraFinalizada){
            return (
                <div className='container checkout-page'>
                    <h1>Checkout</h1>
                    <div className="checkout-content">
                        <div className="info-pedido">
                            <div>
                                <h3>Gracias por tu compra!</h3>
                                <h4 className='mb-4'>ID de la compra es: <span>{idCompra}</span></h4>
                                {<Link to='/' className='btn primary'>Seguir Comprando</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (cart.length > 0) {
                return (
                    <div className='container checkout-page'>
                        <h1>Checkout</h1>
                        <div className="row">
                            <div className="col-xs-1 col-lg-8 mb-4 order-2 order-md-1">
                                <div className='checkout-content'>
                                    <h2 className='mb-4'>Finalizar Solicitud de Compra</h2>
                                    {
                                        userDetails
                                            ?
                                            <div>
                                                <div className='mb-5 verifica-info'>
                                                    <p>Hola, <span className='name'>{userDetails.name}</span> gracias por confiar en <strong>OnlineStore.com</strong></p>
                                                    <p>Verifica que los items seleccionados y las cantidades sean correctas y luego poder confirmar tu pedido.</p>
                                                </div>
                                                <div className="captcha mb-4">
                                                {<ReCaptcha captchaOk={captchaOk}/>}
                                                </div>
                                                <button className='btn primary' onClick={newCheckoutUser}>
                                                    Confirmar Pedido
                                                </button>
                                            </div>
                                            : <CheckoutForm />
                                    }

                                </div>
                            </div>
                            <div className="col-xs-1 col-lg-4  order-1 order-md-2">
                                {SummaryCart(cart, false)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='container checkout-page'>
                        <h1>Checkout</h1>
                        <div className="checkout-content">
                            <div className="info-pedido">
                                <div>
                                    <h4>No hay ningun producto para solicitar</h4>
                                    {<Link to='/' className='btn primary'>Ir a Comprar</Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}
