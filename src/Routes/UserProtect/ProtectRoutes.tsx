import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectRoutes: React.FC = () => {
    const token = localStorage.getItem('poumki_user_tok')
    return token ? <Outlet /> : <Navigate to={'/login'} />

}

export default ProtectRoutes
