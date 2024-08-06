import React, {useState} from 'react'
import {useUserAuth} from "../../../context/AuthUserContext.jsx";
import Loading from "../../../assets/loading-gif.gif";
import ReCaptcha from "../../ReCaptcha/ReCaptcha.jsx";
import {useNotificarions} from "../../../hooks/useNotificarions.js";
import UserInfoForm from "../../Forms/UserInfoForm.jsx";
import {Navigate} from "react-router-dom";

export default function LoginRegisterForm({showLogin = true, showRegister = true}) {
    const { login, userDetails, loadingLogin } = useUserAuth()
    const { setNoti } = useNotificarions()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captchaValidate, setCaptchaValidate] = useState('')


    const loginUsers = (e) => {
        e.preventDefault()
        if(captchaValidate){
            login(email, password)
            setEmail('')
            setPassword('')
        } else{
            setNoti('Debes validar el Captcha','error')
        }
    }

    const handlerInputEmail = (e) => {
        const valor = e.target.value
        setEmail(valor)
    }
    const handlerInputPass = (e) => {
        const valor = e.target.value
        setPassword(valor)
    }

    const captchaOk = (info) => {
        setCaptchaValidate(info)
    }

    return (
        <>
            {
                loadingLogin ?
                    <div className="loading">
                        <img src={Loading} alt=""/>
                    </div>
                    :
                    (
                        !userDetails ?
                            <div className='container mb-5'>
                                <div className="row">
                                    {
                                        showLogin &&
                                        <div className="col-lg-5 mb-5 login-box">
                                            <div className="box-border">
                                                <h2>Iniciar Sesion</h2>
                                                <div className='s'>
                                                    <form onSubmit={loginUsers}>
                                                        <div className="form-group mb-2">
                                                            <label className="mb-2"
                                                                   htmlFor="exampleInputEmail1"><span>*</span>Email:</label>
                                                            <input type="email" className="form-control"
                                                                   id="exampleInputEmail1"
                                                                   aria-describedby="emailHelp"
                                                                   placeholder="Enter email" value={email} name='email'
                                                                   onChange={handlerInputEmail}
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label className="mb-2"
                                                                   htmlFor="exampleInputPassword1"><span>*</span>Contraseña:</label>
                                                            <input type="password" className="form-control"
                                                                   id="exampleInputPassword1"
                                                                   placeholder="Password" value={password}
                                                                   onChange={handlerInputPass}
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="captcha mb-4">
                                                            {<ReCaptcha captchaOk={captchaOk}/>}
                                                        </div>
                                                        <button className="btn primary">
                                                            Iniciar Sesion
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        showRegister &&
                                        <div className="col-lg-7 mb-5">
                                            <div className="box-border">
                                                <h2>Registrarse</h2>
                                                <div className='c'>
                                                    <UserInfoForm/>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            :
                            <div className='container'>
                                <Navigate replace to="/my-account/dashboard" />
                            </div>
                    )
            }
        </>
    )
}
