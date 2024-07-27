import React from 'react'
import Profile from './Profile';

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-gray-950 h-16 flex items-center justify-between px-4">
                <div className='w-[7%]  flex justify-start items-start p-3'>
                    <h1 className='text-white flex- flex-col flex justify-center font-bold ml-8 sm:ml-0 font-mono sm:text-3xl '>ADMIN</h1>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <Profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
