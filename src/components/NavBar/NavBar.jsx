import CartWidget from "../CartWidget/CartWidget.jsx";

export default function NavBar() {
    return (
        <div className='menu-cart'>
            <nav>
                <ul className='main-menu'>
                    <li className='nav-item'>
                        <a href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">Categorías</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">Carrito</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">Contactos</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}
