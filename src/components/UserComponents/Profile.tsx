import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../Redux/Store';
import { toast, ToastContainer } from 'react-toastify';


interface UserDetails {
    id: string
    firstname: string;
    email: string;
}

const Profile: React.FC = () => {

    const navigate = useNavigate()
    const selector = useSelector((state: RootState) => state.user.poumkiUserDetails) as UserDetails
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState<string>("")

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const id = selector?.id

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/getsingleuser/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log(data);
                
                if(data.success === true){
                    setUsername(data.user.firstname)
                }else{
                    localStorage.removeItem("poumki_user_tok")
                    navigate('/login')
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('poumki_user_tok')
        toast.success("Logging out Successfully!")
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={handleOpen}
                className="text-black py-2 font-semibold"
            >
                {username}
            </button>
            {isOpen && (
                <div className="absolute top-10 right-0 mt-2 w-80 p-4 bg-white border border-gray-200 shadow-lg z-10 rounded-xl">
                    <div className='flex flex-col items-start gap-3'>
                        <h6 className="text-lg text-gray-700 mb-6 font-mono font-bold underline">Your Profile</h6>
                        <p className="text-sm text-gray-600 mb-1 font-bold">Name: <span className='text-black font-mono'>{username}</span></p>
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
