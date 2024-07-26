import { Routes, Route } from "react-router-dom"
import AdminHomePage from "../Pages/AdminPages/AdminHomePage"
import LoginPage from "../Pages/AdminPages/LoginPage"

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminHomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoutes
