import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { RootState } from '../../Redux/Store'
import { UserCircleIcon } from '@heroicons/react/16/solid'

interface AdminDetails {
    firstname: string;
    email: string;
}

const Profile: React.FC = () => {

    const navigate = useNavigate()
    const selector = useSelector((state: RootState) => state.admin.poumkiAdminDetails) as AdminDetails

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleLogout = () => {
        localStorage.removeItem('poumki_admin_tok')
        toast.success("Logging out Successfully!")
        setTimeout(() => {
            navigate('/admin/login')
        }, 2000);
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={handleOpen}
                className="text-white py-2 font-semibold flex flex-row gap-2 items-center hover:text-yellow-100"
            >
                <UserCircleIcon className="h-6 w-6 text-white" />
                {selector.firstname}
            </button>
            {isOpen && (
                <div className="absolute top-10 right-0 mt-2 w-80 p-4 bg-white border border-gray-200 shadow-lg z-10 rounded-xl">
                    <div className='flex flex-col items-start gap-3'>
                        <h6 className="text-lg text-gray-700 mb-6 font-mono font-bold underline">Your Profile</h6>
                        <p className="text-sm text-gray-600 mb-1 font-bold">Name: <span className='text-black font-mono'>{selector.firstname}</span></p>
                        <p className="text-sm text-gray-600 mb-1 font-bold">Email: <span className='text-black font-mono'>{selector.email}</span></p>
                        <button className='border-2 hover:bg-black hover:text-white p-2 rounded-lg font-bold font-mono' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Profile
