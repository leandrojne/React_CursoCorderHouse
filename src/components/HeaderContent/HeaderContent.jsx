import LogoUrl from '../../assets/logo.png'
import NavBar from "../NavBar/NavBar.jsx";
export default function HeaderContent() {
    return (
        <header className='fluid-container'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="logo">
                            <a href="/">
                                <img src={LogoUrl} alt="SitioWeb.com"/>
                            </a>
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
