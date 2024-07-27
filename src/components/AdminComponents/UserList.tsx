import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaUser } from 'react-icons/fa';
import userImg from '../../assets/Images/user.png'

interface UserDetails {
    _id: string
    firstname: string;
    lastname: string;
    email: string;
    createdAt: string;
}

const UserList: React.FC = () => {

    const [allUsers, setAllUsers] = useState<UserDetails[]>([]);

    useEffect(() => {
        const fetchUser = async (): Promise<void> => {
            try {
                const response = await fetch('http://localhost:3000/admin/getallusers', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setAllUsers(data.Allusers);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser()
    }, [allUsers]);

    const HandleDeleteAllusers = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/admin/deleteallusers', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            if (data.success === true) {
                setAllUsers(data.deleteAllusers);
                setTimeout(() => {
                    toast.success('Deleted all users!')
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteById = async (e: React.MouseEvent<HTMLButtonElement>, id: string): Promise<void> => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/admin/deleteuserbyid/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            if (data.success === true) {
                alert("heyy")
                setAllUsers(data.deleteuser);
                setTimeout(() => {
                    toast.success(`Deleted ${data.deleteuser.firstname}!`)
                }, 2000);
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="flex flex-col w-full">
            <Header />
            <div className="flex justify-center">
                <Sidebar />
                {allUsers.length > 0 ? (
                    <div className="overflow-y-hidden rounded-lg pt-12 bg-offgreen mr-2 mx-auto h-auto w-screen sm:px-10 bg-gray-100">
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <div className='flex  lg:flex-row flex-col'>
                                <h1 className='font-semibold text-xl uppercase font-mono flex flex-row gap-2 mb-2'>
                                    <FaUser className='w-8 h-6' />
                                    User List
                                </h1>
                            </div>
                            <span className='sm:ml-[14rem] ml-16 '>Are you sure to delete all users? <button className='underline text-red-500' onClick={HandleDeleteAllusers}>Delete All</button></span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-400 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                        <th className="px-4 py-3">ID</th>
                                        <th className="px-5 py-3">First Name</th>
                                        <th className="px-5 py-3">Last Name</th>
                                        <th className="px-5 py-3">Email</th>
                                        <th className="px-5 py-3">Date</th>
                                        <th className="px-5 py-3">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-500">
                                    {Array.isArray(allUsers) && allUsers.map((user, index) => (
                                        <tr key={index} className='font-bold'>
                                            <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="whitespace-no-wrap">{index + 1}</p>
                                            </td>
                                            <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-full w-full rounded-full" src={userImg} alt="Image" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="whitespace-no-wrap text-grey">{user.firstname}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                                                <p className="whitespace-no-wrap">{user.lastname}</p>
                                            </td>
                                            <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                                                <p className="whitespace-no-wrap">{user.email}</p>
                                            </td>
                                            <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                                                <p className="whitespace-no-wrap">{user.createdAt}</p>
                                            </td>
                                            <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                                                <button className="whitespace-no-wrap bg-black font-semibold p-2 rounded-md text-white" onClick={(e) => handleDeleteById(e, user._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center text-center py-10 flex-col">
                        <p className="text-gray-600  text-4xl font-bold">User list is <span className='text-red-500'>empty</span></p>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserList;
