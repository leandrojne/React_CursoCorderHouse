import React, {useEffect, useState} from 'react'
import {useUserAuth} from "../../../context/AuthUserContext.jsx";
import Loading from "../../../assets/loading-gif.gif";
import {Navigate} from "react-router-dom";

function Dashboard() {
    const { userDetails, loadingLogin, logout } = useUserAuth()

    return (
        <div className='container my-account-dashboar'>
            <h1>Mi Cuenta</h1>
            {
                loadingLogin
                    ?
                    <div className="loading">
                        <img src={Loading} alt=""/>
                    </div>
                    :
                    !userDetails
                    ? <Navigate replace to="/login-register" />
                    : <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <div className="sidebar">
                                    <h4>Menu</h4>
                                    <ul>
                                        <li><a href="#">Mi Cuenta</a></li>
                                        <li><a href="#">Mi Direccion</a></li>
                                        <li><a href="#">Mis Pedidos</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <div className="info">
                                    <h2>Mi Informacion</h2>
                                    <ul>
                                        {
                                            userDetails && (
                                                <>
                                                    <li><span>Nombre:</span> {userDetails.name}</li>
                                                    <li><span>Apellido:</span> {userDetails.apellido}</li>
                                                    <li><span>DNI:</span> {userDetails.dni}</li>
                                                    <li><span>Email:</span> {userDetails.email}</li>
                                                    <li><span>Teléfono:</span> {userDetails.telefono}</li>
                                                    <li><span>Direccion:</span> {userDetails.direccion}</li>
                                                    <li><span>Provincia:</span> {userDetails.provincia}</li>
                                                </>
                                            )
                                        }
                                    </ul>
                                    <div className="actions">
                                        <button className='btn primary' onClick={logout}>Cerrar Sesion</button>
                                    </div>
                                </div>
                            </div>
                        </div>

            }

        </div>
    )
}

export default Dashboard
