import CartWidget from "../CartWidget/CartWidget.jsx";
import {NavLink} from "react-router-dom";

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
                        <div className="header-nav d-md-block d-lg-none">
                            <div className="title">
                                Menu
                                <button className="navbar-toggler close" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <ul className="main-menu navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/'>
                                    <span className='d-block d-lg-none'
                                          data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                          aria-controls="navbarNavDropdown" aria-expanded="false"
                                          aria-label="Toggle navigation">
                                        Home
                                    </span>
                                    <span className='d-none d-lg-block'>
                                        Home
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <span>
                                        Categorías
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to='/category/notebook'>
                                            <span className='d-block d-lg-none'
                                                  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                                  aria-controls="navbarNavDropdown" aria-expanded="false"
                                                  aria-label="Toggle navigation">
                                                Notebook
                                            </span>
                                            <span className='d-none d-lg-block'>
                                                Notebook
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/smartphone'>
                                            <span className='d-block d-lg-none'
                                                  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                                  aria-controls="navbarNavDropdown" aria-expanded="false"
                                                  aria-label="Toggle navigation">
                                                Smartphone
                                            </span>
                                            <span className='d-none d-lg-block'>
                                                Smartphone
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/smartwatch'>
                                            <span className='d-block d-lg-none'
                                                  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                                  aria-controls="navbarNavDropdown" aria-expanded="false"
                                                  aria-label="Toggle navigation">
                                                Smartwatch
                                            </span>
                                            <span className='d-none d-lg-block'>
                                                Smartwatch
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/tablet'>
                                            <span className='d-block d-lg-none'
                                                  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                                  aria-controls="navbarNavDropdown" aria-expanded="false"
                                                  aria-label="Toggle navigation">
                                                Tablet
                                            </span>
                                            <span className='d-none d-lg-block'>
                                                Tablet
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart'>
                                    <span className='d-block d-lg-none'
                                          data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                          aria-controls="navbarNavDropdown" aria-expanded="false"
                                          aria-label="Toggle navigation">
                                        Carrito
                                    </span>
                                    <span className='d-none d-lg-block'>
                                        Carrito
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact-us'>
                                    <span className='d-block d-lg-none'
                                          data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                          aria-controls="navbarNavDropdown" aria-expanded="false"
                                          aria-label="Toggle navigation">
                                        Contacto
                                    </span>
                                    <span className='d-none d-lg-block'>
                                        Contacto
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </div>
    )
}
