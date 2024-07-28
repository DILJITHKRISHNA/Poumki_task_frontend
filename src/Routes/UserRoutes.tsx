import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/UserPages/HomePage'
import RegisterPage from '../Pages/UserPages/RegisterPage'
import LoginPage from '../Pages/UserPages/LoginPage'
import ProtectRoutes from './UserSecure/ProtectRoutes'
import UserPublic from './UserSecure/UserPublic'
import React from 'react'

const UserRoutes: React.FC = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ProtectRoutes />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/login" element={<UserPublic />}>
                    <Route index element={<LoginPage />} />
                </Route>
                <Route path="/register" element={<UserPublic />}>
                    <Route index element={<RegisterPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default UserRoutes
