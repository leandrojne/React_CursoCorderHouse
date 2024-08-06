import React, {useState} from 'react'
import ReCaptcha from "../ReCaptcha/ReCaptcha.jsx";
import {useUserAuth} from "../../context/AuthUserContext.jsx";
import {useNotificarions} from "../../hooks/useNotificarions.js";

function UserInfoForm() {
    const { register } = useUserAuth()
    const { setNoti } = useNotificarions()

    const compradorContactos = {
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        telefono: '',
        provincia: '',
        direccion: '',
        password: '',
        fecha: new Date()
    }

    const [inputsForm, setInputsForm] = useState(compradorContactos)
    const [captchaValidate, setCaptchaValidate] = useState('')

    const registerUser = (e) => {
        e.preventDefault()
        if(captchaValidate){
            register(inputsForm, "Users")
            setInputsForm(compradorContactos)
        } else {
            setNoti('Debes validar el Captcha','error')
        }
    }

    const captchaOk = (info) => {
        setCaptchaValidate(info)
    }

    const handleInputs = (e) => {
        setInputsForm({
            ...inputsForm,
            [e.target.name]: e.target.value
        })
    }
    const provinciasOptions = [
        { value: "Selecciones una Provincia", label: "Selecciones una Provincia"},
        { value: "CABA", label: "CIUDAD AUTONOMA DE BsAs"},
        { value: "BsAs", label: "BUENOS AIRES"},
        { value: "Catamarca", label: "CATAMARCA"},
        { value: "Cordoba", label: "CORDOBA"},
        { value: "Corrientes", label: "CORRIENTES"},
        { value: "Chaco", label: "CHACO"},
        { value: "Chubut", label: "CHUBUT"},
        { value: "Entre Rios", label: "ENTRE RIOS"},
        { value: "Formosa", label: "FORMOSA"},
        { value: "Jujuy", label: "JUJUY"},
        { value: "La Pampa", label: "LA PAMPA"},
        { value: "La Rioja", label: "LA RIOJA"},
        { value: "Mendoza", label: "MENDOZA"},
        { value: "Misiones", label: "MISIONES"},
        { value: "Neuquen", label: "NEUQUEN"},
        { value: "Rio Negro", label: "RIO NEGRO"},
        { value: "Salta", label: "SALTA"},
        { value: "San Juan", label: "SAN JUAN"},
        { value: "San Luis", label: "SAN LUIS"},
        { value: "Santa Cruz", label: "SANTA CRUZ"},
        { value: "Santa Fe", label: "SANTA FE"},
        { value: "Santiago del Estero", label: "SANTIAGO DEL ESTERO"},
        { value: "Tierra del Fuego", label: "TIERRA DEL FUEGO"},
        { value: "Tucuman", label: "TUCUMAN"}
    ]

    return (
        <form onSubmit={registerUser}>
            <div className="row">
                <div className="form-group col-md-6 mb-3">
                    <label className="mb-2"
                           htmlFor="nombre"><span>*</span>Nombre:</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           placeholder="Nombre"
                           value={inputsForm.nombre}
                           onChange={handleInputs}
                           name="nombre"
                           required
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
                           required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6 mb-3">
                    <label className="mb-2" htmlFor="dni"><span>*</span>DNI:</label>
                    <input type="number"
                           className="form-control"
                           id="dni"
                           placeholder="DNI"
                           value={inputsForm.dni}
                           onChange={handleInputs}
                           name="dni"
                           required
                    />
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label className="mb-2"
                           htmlFor="email"><span>*</span>Email:</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           value={inputsForm.email}
                           onChange={handleInputs}
                           name="email"
                           required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6 mb-4">
                    <label className="mb-2" htmlFor="password">Contraseña:</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Contraseña"
                           value={inputsForm.password}
                           onChange={handleInputs}
                           name="password"
                    />
                </div>
                <div className="form-group col-md-6 mb-4">
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
            </div>
            <div className="row">
                <div className="form-group col-md-6 mb-4">
                    <label className="mb-2" htmlFor="provincia">Ciudad:</label>
                    <select id="provincia" name='provincia'
                            className='form-control form-select'
                            onChange={handleInputs}>
                        {
                            provinciasOptions.map((prov) => {
                                return <option key={prov.value}
                                               value={prov.value}>{prov.label}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 mb-4">
                    <label className="mb-2" htmlFor="direccion"><span>*</span>Dirección:</label>
                    <input type="text"
                           className="form-control"
                           id="direccion"
                           placeholder="Dirección"
                           value={inputsForm.direccion}
                           onChange={handleInputs}
                           name="direccion"
                           required
                    />
                </div>
            </div>


            <div className="captcha mb-4">
                {<ReCaptcha captchaOk={captchaOk}/>}
            </div>
            <button className='btn primary'>
                Registrarse
            </button>
        </form>
    )
}

export default UserInfoForm
