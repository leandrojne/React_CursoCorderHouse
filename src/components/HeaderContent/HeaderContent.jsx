import LogoUrl from '../../assets/logo_store.png'
import NavBar from "../NavBar/NavBar.jsx";
import {Link} from "react-router-dom";
export default function HeaderContent() {
    return (
        <header className='fluid-container'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src={LogoUrl} alt="SitioWeb.com"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <NavBar />
                    </div>
                </div>
            </div>
        </header>
    )
}
