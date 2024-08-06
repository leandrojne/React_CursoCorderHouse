import LogoUrl from '../../assets/logo_store.png'
import NavBar from "../NavBar/NavBar.jsx";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../context/AuthUserContext.jsx";
export default function HeaderContent() {
    const { userDetails } = useUserAuth()

    return (
        <>
            <div className="top-header">
                <div className='container'>
                    <div className="row">
                        {
                            userDetails
                                ?
                                <div className='welcome'>Bienvenido: <strong>{userDetails.name}</strong> | <Link to='/my-account/dashboard'>Ir a Mi CUenta</Link></div>
                                :
                                <Link to='/login-register'>Iniciar Sesion</Link>
                        }
                    </div>
                </div>
            </div>
            <header className='fluid-container'>
                <div className='container'>
                    <div className="row">
                        <div className="col-5 content-logo">
                            <div className="logo">
                                <Link to={'/'}>
                                    <img src={LogoUrl} alt="SitioWeb.com"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-7">
                            <NavBar/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
