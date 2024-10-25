import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets/assets_frontend/assets';

const Bannner = () => {
    const navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-8 sm:px-10 md:px-14 lg:px-16 my-20 md:px-10'>
        <div>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold mt-12'>
              <p>Book Appointment</p>
              <p>With trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-gray-50 py-4 px-8 rounded-full mt-10 text-black font-semibold overflow-hidden hover:translate-y-[10px] transition-all duration-200'>create account</button>
        </div>
        <div className='hidden md:block md:w-5 lg:w-[300px] relative'>
            <img className='w-full ' src={assets.appointment_img} alt=""/>
        </div>
    </div>
  );
}

export default Bannner;
