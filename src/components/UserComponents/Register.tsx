'use client'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RegisterLoop from '../../assets/RegisterLoop.mp4'
import React, { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

interface UserData {
  firstname: string
  lastname: string
  email: string
  password: string
}

const Register: React.FC = () => {

  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData>({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const initialUserData: UserData = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  const handleClear = () => {
    setUserData(initialUserData)
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      if (userData.email.trim() === "" || userData.password.trim() === "" || userData.firstname.trim() === "" || userData.lastname.trim() === "") {
        toast.error("Please fill in all fields")
      } else if (userData.password.length < 8) {
        toast.error("Password must be at least 8 characters long")
      } else {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        const data = await response.json()
        console.log(data);
        if (response.status == 200) {
          toast.success("User Registered successfully!")
          setTimeout(() => {
            navigate('/login')
          }, 2000);
        } else {
          toast.error("Failed to Register User")
        }
      }
    } catch (error) {
      console.log(error);

    }
  }
  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className='w-full h-screen flex sm:flex-row flex-col  items-start justify-start'>
      <h1 className='absolute font-extrabold p-6 text-4xl text-white'>ιηк</h1>
      <video src={RegisterLoop} loop autoPlay muted className='sm:h-full sm:w-[30%] sm:object-cover' />
      <div className='w-full mt-[6rem]'>
        <div className='flex flex-col gap-10'>
          <span className='flex flex-row sm:items-center sm:ml-[10rem] ml-[1rem]'>
            <div className='w-24 border-b-2 border-gray-200'></div>
            <span className='px-4 text-gray-500'>Register</span>
            <div className='w-24 border-b-2 border-gray-200'></div>
          </span>
          <div className='flex flex-col sm:ml-[10rem] gap-2 ml-14'>
            <div className="flex flex-row sm:gap-[12rem] gap-24">
              <label htmlFor="" className='font-semibold'>First Name</label>
              <button className="hover:bg-black border-2 text-black rounded-full hover:text-white px-4 py-1 font-semibold" type="button" onClick={handleClear}>Clear</button>
            </div>
            <input
              type="text"
              name='firstname'
              placeholder='firstname'
              value={userData.firstname}
              onChange={handleOnchange}
              className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
            />

            <label htmlFor="" className='font-semibold'>Last Name</label>
            <input
              type="text"
              name='lastname'
              placeholder='lastname'
              value={userData.lastname}
              onChange={handleOnchange}
              className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
            />
            <label htmlFor="" className='font-semibold'>Email</label>
            <input
              type="email"
              name='email'
              placeholder='Email'
              value={userData.email}
              onChange={handleOnchange}
              className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
            />
            <label htmlFor="" className='font-semibold'>Password</label>
            <input
              type="password"
              name='password'
              placeholder='Password'
              value={userData.password}
              onChange={handleOnchange}
              className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
            />
          </div>
          <div className='flex items-center gap-2 sm:ml-[10rem] ml-14 bg-black border-2 hover:border-gray-500 sm:w-[22rem] w-[15rem] sm:justify-center p-2 rounded-full'>
            <button className='w-[22rem] justify-center p-3 rounded-xl text-white font-bold' onClick={handleSubmit}>Validate</button>
          </div>
          <span className='sm:ml-[14rem] ml-14'>Already have an account? <button className='underline' onClick={handleClick}>Sign in</button></span>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
