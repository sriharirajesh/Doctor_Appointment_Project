import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets/assets_frontend/assets';

export  const NavBar = () => {
    const navigate = useNavigate()
    const [showMenu,setShowMenu] = useState(false)
    const [token,setToken] = useState(true)
    const [fix,setFix] =useState(false)

    function setFixed(){
        
            if(window.scrollY >= 300){
                setFix(true)
            }
            else{
                setFix(false)
            }
        
    }

    window.addEventListener("scroll",setFixed)

  return (
    <div className='flex items-center justify-between text-m py-4 mb-5 border-b border-b-violet-500  '>
       <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt=''/>
       <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/Doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to = '/contact'>
            <li className='py-1'>Contact</li>
            <hr  className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr  className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
       </ul>
       <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center cursor-pointer gap-3 group-relative'>
               <img className='w-8 rounded-full ' src={assets.profile_pic}/>
               <img className='w-3 rounded-full' src={assets.dropdown_icon}/>
               <div className='absolute top-0 right-0 pt-4 text-base font-medium text-gray-600 z-20 mt-9  group-hover:block'>
                   <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-2'>
                      <p onClick={()=>navigate('/my-Profile')} className='hover:text-black cursor-pointer font-sm'>My Profile</p>
                      <p onClick={()=>navigate('/my-Appointment')} className='hover:text-black cursor-pointer font-sm'>My Appointments</p>
                      <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer font-sm'>Logout</p>
                   </div>
               </div>
              </div>
              :<button onClickCapture={()=>setToken(false)} onClick={()=>navigate('/Login')} className='bg-primary py-3 px-4 font-light text-white rounded-full flex items-center' >Create account</button>
        }
       </div>
       
    </div>
  );
}

export default NavBar;
