import {useState} from "react";

export default function AddToCart({productQty}) {
    const [count, setCount] = useState(1)

    function handleClickMore() {
        if (count < productQty) {
            setCount(count + 1)
        }
    }
    function handleClickLess() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const inputChange = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1){
            setCount(1)
        } else if(value > productQty) {
            setCount(productQty)
        } else {
            setCount(value)
        }

    }


    return (
        <div className="addtocart">
            <div className="qty">
                <span className='link-action less' onClick={handleClickLess}>-</span>
                <input type="number" name='qty' value={count} onChange={inputChange}/>
                <span className='link-action more' onClick={handleClickMore}>+</span>
            </div>
            <div className="add">
            <button className='btn primary'>Agregar al Carrito</button>
            </div>
        </div>
    )
}
