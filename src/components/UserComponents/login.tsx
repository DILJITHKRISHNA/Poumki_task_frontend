import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import LoginLoop from '../../assets/LoginLoop.mp4'
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../Redux/UserSlice";

interface LoginData {
    email: string;
    password: string;
}


const login: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: '',
    })

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const initialLoginData: LoginData = {
        email: '',
        password: '',
    };

    const handleClear = () => {
        setLoginData(initialLoginData)
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            if (loginData.email.trim() === "" || loginData.password.trim() === "") {
                toast.error("Please fill in all fields")
            } else if (loginData.password.length < 8) {
                toast.error("Password must be at least 8 characters long")
            } else {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                })
                const data = await response.json()
                console.log(data, "llogimn tokeennn");
                if (data.success == true) {
                    localStorage.setItem('poumki_user_tok', data.token)
                    dispatch(setUserDetails({
                        email: data.existingUser.email,
                        firstname: data.existingUser.firstname,
                        lastname: data.existingUser.lastname,
                        token: data.token
                    }))
                    toast.success("Successfully Logged In!")
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                } else {
                    toast.error("Failed to Login User")
                }
            }
        } catch (error) {
            console.log(error);

        }
    }

    const handleClick = () => {
        navigate('/register')
    }

    return (
        <div className='w-full h-screen flex sm:flex-row flex-col  items-start justify-start'>
            <h1 className='absolute font-extrabold p-6 text-4xl text-white'>ιηк</h1>
            <video src={LoginLoop} loop autoPlay muted className='sm:h-full sm:w-[30%] sm:object-cover' />
            <div className='w-full mt-[6rem]'>
                <div className='flex flex-col gap-10'>
                    <span className='flex flex-row sm:items-center sm:ml-[10rem] ml-[1rem]'>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                        <span className='px-4 text-gray-500'>Login</span>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                    </span>
                    <div className='flex flex-col sm:ml-[10rem] gap-2 ml-14'>
                        <div className="flex flex-row sm:gap-[15rem] gap-32">
                            <label htmlFor="" className='font-semibold'>Email</label>
                            <button className="hover:bg-black border-2 text-black rounded-full hover:text-white px-4 py-1 font-semibold" type="button" onClick={handleClear}>Clear</button>
                        </div>
                        <input
                            type="email"
                            name='email'
                            placeholder='email'
                            value={loginData.email}
                            onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />

                        <label htmlFor="" className='font-semibold'>Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='password'
                            value={loginData.password}
                            onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />
                    </div>
                    <div className='flex items-center gap-2 sm:ml-[10rem] ml-14 bg-black border-2 hover:border-gray-500 sm:w-[22rem] w-[15rem] sm:justify-center p-2 rounded-full'>
                        <button className='w-[22rem] justify-center p-3 rounded-xl text-white font-bold' onClick={handleSubmit}>Login</button>
                    </div>
                    <span className='sm:ml-[14rem] ml-14'>Don't have an account? <button className='underline' onClick={handleClick}>Sign Up</button></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default login
