import {createContext, useContext, useState} from "react";
import {useNotificarions} from "../hooks/useNotificarions.js";
export const NotificationsContext = createContext()
export const Notification = () => {
    const { msj, classNoti } = useNotificarions()

    if(msj === '') return
    return <div className='container'>
        <div className={`notificacion noti-${classNoti}`}>
            {msj}
        </div>
    </div>
}

export const NotificationsProvider = ({children}) => {
    const [msj, setMsj] = useState('')
    const [classNoti, setClassNoti] = useState('info')

    const setNoti = (msg, classNoti) => {
        window.scrollTo(0, 0);
        setMsj(msg);
        setClassNoti(classNoti);
        setTimeout(() => {
            setMsj(``);
        }, 5000);
    }

    return (
        <NotificationsContext.Provider value={{ setNoti, msj, classNoti }}>
            {children}
        </NotificationsContext.Provider>
    )

}