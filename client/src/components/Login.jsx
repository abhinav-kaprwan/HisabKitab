import React,{ useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const navigate = useNavigate()

    const onSubmitHandler= (e) => {
        e.preventDefault();
        axios.post('/api/login',{username, password})
        .then((result)=>{ 
            console.log(result)
            navigate('/dashboard')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <form 
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
       onSubmit={onSubmitHandler}>
        <div>
        <h1 className='text-center text-xl rounded font-bold mb-2'>Login</h1>
        </div>
        <div className='mb-4'>
            <label className="block text-gray-700 text-left text-sm font-bold mb-2" >
                Username
            </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder='Enter your Email Id' 
            value ={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
        </div>
        <div className=''>
            <label className="block text-gray-700 text-left text-sm font-bold mb-1.5" >
                Password
            </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password" 
            placeholder='Enter your password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
        </div>
        <div className='mb-4 text-right'>
            <a
            className='text-xs inline-block' 
            href=""
            >
                Forgot Password?
            </a>
            </div>
        <div>
            <button
            type='submit' 
            className="bg-purple-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-full">
                LOGIN
            </button>
        </div>
        
       </form>
    </div>
  )
}

export default Login