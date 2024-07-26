import { Navigate, Outlet } from "react-router-dom"

const ProtectRoutes = () => {
    const token = localStorage.getItem('poumki_user_tok')
    return token ? <Outlet /> : <Navigate to={'/login'} />

}

export default ProtectRoutes
