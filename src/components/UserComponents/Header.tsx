import { FaRobot } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import React from 'react'
import Profile from './Profile'

const Header: React.FC = () => {

    const selector = useSelector((state: RootState) => state.user.poumkiUserDetails)
    const firstname: string = selector?.firstname ?? "Guest"

    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className="text-green-700 font-bold text-2xl"><FaRobot /></div>
            <div className="flex space-x-4">
                <span className="font-sans font-semibold cursor-pointer">👤 <Profile/></span>
            </div>
        </nav>
    )
}

export default Header
