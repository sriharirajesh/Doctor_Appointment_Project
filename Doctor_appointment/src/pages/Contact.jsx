import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets';
const contact = () => {
  return (
    <div>
      
      <div className='text-center text-xl text-gray-700'>
        <p className=" text-gray font-medium">Contact Us</p>
      </div>
      <div className='my-12 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[400px]' src={assets.contact_image} alt=""/>
        <div className='flex flex-col justify-center gap-6  md:w-2/4 text-sm text-gray-600'>
         <b className='text-gray-700 font-semibold text-lg'>Our Office</b>
         <p className='text-gray-500'>56789,Willam Station<br/> Washing Town D.C,USA</p>
         <p className='text-gray-500'>Tel:(6130)333-1032<br/>Email:Prescripto_usa@gmail.com</p>
         <b>Careers At Prescripto</b>
         <p className='text-gray-500'>Learn More About Our Teams and Job Openings</p>
         <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '>Explore Jobs</button>
      </div>
    
      </div>

    </div>
  );
}

export default contact;
