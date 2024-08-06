import {useEffect, useState} from "react";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../../firebase/config.js";
import ReCaptcha from "../../ReCaptcha/ReCaptcha.jsx";
import {useNotificarions} from "../../../hooks/useNotificarions.js";

export default function Contact() {
    const { setNoti } = useNotificarions()
    const infoInputs = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        consulta: '',
        fecha: new Date()
    }
    const [captchaValidate, setCaptchaValidate] = useState('')
    const [formSend, setFormSend] = useState(false)
    const [inputsForm, setInputsForm] = useState(infoInputs)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(inputsForm.nombre.trim() === ''){
            setNoti('error en campo nombre', 'error')
        } else if(inputsForm.apellido.trim() === ''){
            setNoti('error en campo apellido', 'error')
        } else if(inputsForm.email.trim() === ''){
            setNoti('error en campo email', 'error')
        } else if(inputsForm.consulta.trim() === ''){
            setNoti('error en campo consulta', 'error')
        } else if(captchaValidate) {
            const pedidoRef = collection(db, "contactos")
            addDoc(pedidoRef, inputsForm)
            setInputsForm(infoInputs)
            setFormSend(true)
            setNoti('Gracias por su consulta, pronto nos comunicaremos con usted.','success')
        } else {
            setNoti('Debes validar el Captcha','error')
        }
    }

    const handleInputs = (e) => {
        setInputsForm({
            ...inputsForm,
            [e.target.name]: e.target.value
        })
    }
    const captchaOk = (info) => {
        setCaptchaValidate(info)
    }

    const showForm = () => {
        if(formSend) {
            return (
                <div className="container-contact-form gracias">
                    <h3>Gracias, pronto nos comunicaremos contigo!</h3>
                </div>
            )
        } else {
            return (
                <form className='container-contact-form contact-form mb-5' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label className="mb-2" htmlFor="name">
                                <span>*</span>
                                Nombre:
                            </label>
                            <input type="text"
                                   className='form-control'
                                   id="name"
                                   placeholder="Nombre"
                                   value={inputsForm.nombre}
                                   onChange={handleInputs}
                                   name="nombre"
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                        <label className="mb-2" htmlFor="apellido"><span>*</span>Apellido:</label>
                            <input type="text"
                                   className="form-control"
                                   id="apellido"
                                   placeholder="Apellido"
                                   value={inputsForm.apellido}
                                   onChange={handleInputs}
                                   name="apellido"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label className="mb-2" htmlFor="telefono">Teléfono:</label>
                            <input type="text"
                                   className="form-control"
                                   id="telefono"
                                   placeholder="Teléfono"
                                   value={inputsForm.telefono}
                                   onChange={handleInputs}
                                   name="telefono"
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label className="mb-2" htmlFor="email"><span>*</span>Email:</label>
                            <input type="text"
                                   className="form-control"
                                   id="email"
                                   placeholder="Email"
                                   value={inputsForm.email}
                                   onChange={handleInputs}
                                   name="email"
                            />
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <label className="mb-2" htmlFor="consulta"><span>*</span>Consulta:</label>
                        <textarea
                            className='form-control'
                            name="consulta"
                            id="consulta"
                            placeholder="Ingresá tu consulta"
                            value={inputsForm.consulta}
                            onChange={handleInputs}
                        ></textarea>
                    </div>
                    <div className="captcha mb-4">
                        {<ReCaptcha captchaOk={captchaOk}/>}
                    </div>

                    <div className="actions">
                        <button className='btn primary'>Enviar Consulta</button>
                    </div>
                </form>
            )
        }
    }

    return (
        <div className='container contact-page'>
            <h1>Contactenos!</h1>
            <div className="row ">
                <div className="col-sm-1 col-md-8">
                    {showForm()}
                </div>
                <div className="col-sm-1 col-md-4">
                    <div className="container-contact-map">
                        <h3>Ubicanos en:</h3>
                        <p>Av. 9 de Julio. CABA. Argentina</p>
                        <iframe
                            className='google-maps'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4630.8748366416!2d-58.38087245631627!3d-34.60430148499978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1722269158470!5m2!1ses-419!2sar"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
