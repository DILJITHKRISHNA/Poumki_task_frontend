import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPublic: React.FC = () => {
    const token = localStorage.getItem("poumki_admin_tok")
    return token ? <Navigate to={'/admin'} /> : <Outlet />
}
export default AdminPublic

