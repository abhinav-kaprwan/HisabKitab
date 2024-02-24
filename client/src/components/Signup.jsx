import React, { useState } from 'react'

function Signup() {

    const [username,setUsername]= useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword] =useState('');
    const onSubmitHandler = ()=> {
        e.preventDefault()
    }

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
       <form 
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
       onSubmit={onSubmitHandler}>
        <div>
        <h1 className='text-center text-xl rounded font-bold mb-2'>Sign up</h1>
        </div>
        <div className='mb-4'>
            <label className="block text-gray-700 text-left text-sm font-bold mb-2" >
                Username
            </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder='Enter your Username' 
            value ={username}
            onChange={(e)=> setUsername(e.target.value)}

            />
        </div>
        <div className='mb-4'>
            <label className="block text-gray-700 text-left text-sm font-bold mb-2" >
                Email
            </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder='Enter your Email' 
            value ={email}
            onChange={(e)=> setEmail(e.target.value)}

            />
        </div>
        <div className='mb-4'>
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
        <div className='mb-4'>
            <label className="block text-gray-700 text-left text-sm font-bold mb-2" >
                Confirm Password
            </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder='Confirm your password' 
            value ={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}

            />
        </div>
        
        <div>
            <button className="bg-purple-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-full">
                Sign Up
            </button>
        </div>
        
       </form>
    </div>
  )
}

export default Signup