import { Routes, Route } from "react-router-dom"
import LoginPage from "../Pages/AdminPages/LoginPage"
import React from "react"
import AdminProtect from "./AdminSecure/AdminProtect"
import AdminPublic from "./AdminSecure/AdminPublic"
import UserListPage from "../Pages/AdminPages/UserListPage"

const AdminRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminProtect />}>
          <Route index element={<UserListPage />} />
        </Route>
        <Route path="/login" element={<AdminPublic />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes
