import {useContext} from "react";
import {NotificationsContext} from "../context/NotificationsContext.jsx";

export const useNotificarions = () => {
    return useContext(NotificationsContext)
}