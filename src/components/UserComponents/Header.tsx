import React from 'react'
import Profile from './Profile'
import Logo from '../../assets/Images/MainLogo.jpeg'

const Header: React.FC = () => {


    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className="text-green-700 font-bold text-2xl">
                <img src={Logo} alt="Logo" className='w-7 h-7'/>
            </div>
            <div className="flex space-x-4">
                <span className="font-sans font-semibold cursor-pointer">👤 <Profile/></span>
            </div>
        </nav>
    )
}

export default Header
