import { UsersIcon } from '@heroicons/react/16/solid'
import { CiMenuFries } from "react-icons/ci";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`relative ${isOpen ? 'w-[14%]' : 'w-16 mt-20'} transition-width duration-300`}>
            <div className={`fixed top-0 left-0 h-screen ${isOpen ? 'block' : 'hidden'} md:block bg-gray-950 py-8 mt-12`}>
                <div className="flex flex-col items-center ml-4 justify-between">
                    <div className="mb-8 gap-2">
                    </div>

                    <div className="mb-8 gap-2 ">
                        <Link to='/admin'>
                            <UsersIcon className="h-8 w-8 text-yellow-200 ml-2" />
                            <p className="text-sm mt-2 mr-3 text-yellow-200 hover:underline">
                                User List
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-20 md:hidden text-white"
            >
                <CiMenuFries className="h-8 w-8" />
            </button>
        </div>
    )
}

export default Sidebar
