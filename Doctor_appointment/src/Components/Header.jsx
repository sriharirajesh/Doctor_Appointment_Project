import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets';
const Header = () => {
  return (
     <div className='flex flex-col md:flex-row  flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
         {/*--left-side--*/}
         <div className='flex flex-col items-start justify-center  text-white gap-4 py-3 m-auto md:py-[10vw] md:mb-[-30px] '>
           <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/>
              With Trusted Doctors
            </p>
            <div className='flex gap-2 text-white text-sm font-600 '>
                <img className='h-30 w-45 py-3 m-auto' src={assets.group_profiles} alt=""/>
                <p className='m-auto text-white py-1'>Simply Browse through our extensive List of Trusted Doctors<br/>schedule your hassle-free </p>
            </div>
            <a href="#speciality" className='flex items-center  gap-2 bg-gray-500 hover:bg-gray-600 text-black font-bold py-4 px-4 rounded-full transition-all duration-300'>Book Appointment <img className='brightness-50 relative' src={assets.arrow_icon} alt=""/></a>

         </div>
         {/*--Right--side--*/}
         <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute border:0 h-auto rounded-lg mt-20' src={assets.header_img} alt=""/>
         </div>

     </div>
    
  );
}

export default Header;
