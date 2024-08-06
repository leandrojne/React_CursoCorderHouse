import { authUsr, db } from "../firebase/config.js";
import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useNotificarions } from "../hooks/useNotificarions.js";
import {getDoc, setDoc, doc} from "firebase/firestore";

export const authUsrContext = createContext()

export const useUserAuth = () => {
    const { setNoti } = useNotificarions()
    const context = useContext(authUsrContext);
    if(!context){
        setNoti('error de auth context', 'error')
    } else {
        return context
    }
}

export const AuthUsrProvider = ({children}) => {
    const { setNoti } = useNotificarions()
    const [userDetails, setUserDetails] = useState(null);
    const [emailRegistrado, setEmailRegistrado] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);

    const fetchUserData = async () => {
        setLoadingLogin(true)

        authUsr.onAuthStateChanged(async (user) => {
            try{
                if(!user) {
                    setUserDetails('');
                    setLoadingLogin(false)
                } else {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                    }
                }
            }
            catch (e) {
                setNoti('Error obteniendo la informacion', 'error')
            }
            finally {
                setLoadingLogin(false)
            }
        });

    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const register = async (userRegister, collection) => {
        setLoadingLogin(true)
        setEmailRegistrado(false)
        try {
            await createUserWithEmailAndPassword(authUsr, userRegister.email, userRegister.password);
            const user = authUsr.currentUser;
            if (user) {
                await setDoc(doc(db, collection, user.uid), {
                    id: user.uid,
                    name: userRegister.nombre,
                    apellido: userRegister.apellido,
                    dni: userRegister.dni,
                    email: userRegister.email,
                    telefono: userRegister.telefono,
                    provincia: userRegister.provincia,
                    direccion: userRegister.direccion,
                    password: userRegister.password
                });
            }
            setNoti('Usuario registrado', 'success')
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                setNoti('El email ya esta siendo usado', 'error')
                setEmailRegistrado(true)
            }
        } finally {
            setLoadingLogin(false)
        }
    }

    const login = async (email, password) => {
        setLoadingLogin(true)
        try{
            await signInWithEmailAndPassword(authUsr,email, password)
        }
        catch (e) {
            if(e.code === "auth/invalid-credential"){
                setNoti('Email o Contraseña incorrectos. Por favor, verificá la información e intentá nuevamente.', 'error')
                setLoadingLogin(false)
            }
        }
    }

    const logout = async () => {
        await signOut(authUsr)
        setUserDetails('')
    }

    return (
        <authUsrContext.Provider value={{userDetails, loadingLogin, emailRegistrado, setEmailRegistrado, login, logout, register}}>
            {children}
        </authUsrContext.Provider>
    )
}