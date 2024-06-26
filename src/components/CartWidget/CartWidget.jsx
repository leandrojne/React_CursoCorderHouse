import { BsCartFill } from "react-icons/bs";
export default function CartWidget() {
    return (
        <div className='minicart'>
            <div className="minicart-content">
                <div className="icon">
                    <BsCartFill />
                </div>
                <div className="items">
                    <span>5</span>
                </div>
            </div>
        </div>
    )
}
