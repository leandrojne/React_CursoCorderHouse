import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='menu-cart'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="main-menu navbar-nav">
                            <li className="nav-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/category/notebook'>Notebook</Link></li>
                                    <li><Link to='/category/smartphone'>Smartphone</Link></li>
                                    <li><Link to='/category/smartwatch'>Smartwatch</Link></li>
                                    <li><Link to='/category/tablet'>Tablet</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrito</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </div>
    )
}
