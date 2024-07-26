'use client'

import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('poumki_user_tok')
    navigate('/login')
  }

  return (
    <>
      <div className="bg-red-500">
        user Home page
      </div>
      <button className="text-white bg-black" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home
