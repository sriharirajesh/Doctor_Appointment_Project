import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
     
    const [login,setLogin] = useState('Sign up')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState('');


    const handleLogin = async (e) => {
         e.preventDefault()
         try{
            const response = await axios.post("http://127.0.0.1:5000/create", {name} ,{email},{password})
            setName(response.data)
            setError('')
         }catch(err){
            setError(err.response.data.error)
            setUserDetails(null)
         }
    }

  return (
    <form onSubmit={handleLogin } className='min-h-[100vh] w-full flex items-center'>
       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[440px] sm:min-w-[96px] border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{login === 'Sign up'? 'Create Account' : 'Login'}</p>
        <p>please{login === 'Sign up' ? 'Sign up' : 'Login'} To Book Appointment </p>
        {
            login === 'Sign up' && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type='text' onChange={(e)=> setName(e.target.value)} value={name} required />
        </div>
        }
        <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type='email' onChange={(e)=> setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type ='password' onChange ={(e)=> setPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{login === 'Sign up' ? 'Create Account' : 'Login'}</button>
        {
            login === 'Sign up' ? <p>Already have an account?<span onClick={()=>setLogin('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create an account? <span onClick={()=>setLogin('Sign up')} className='text-primary underline cursor-pointer'>click here </span></p>
        }
       </div>

    </form>
  );
}

export default Login;
