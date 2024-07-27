import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserPublic: React.FC = () => {
    const token = localStorage.getItem("poumki_user_tok")
    return token ? <Navigate to={'/'} /> : <Outlet />
}
export default UserPublic

