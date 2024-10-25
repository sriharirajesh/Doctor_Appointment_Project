import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets/assets_frontend/assets';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-3 py-16 text-gray-800' id="speciality">
      <h1 className='text-bold justify-center text-black text-3xl font-medium'>Find By Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm text-violet-500 font-medium'>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free</p>
      <div className='flex flex-row gap-3 px-4 py-5 m-auto pt-6 '>
        {  
          specialityData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} classname='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""/>
                <p>{item.speciality}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
