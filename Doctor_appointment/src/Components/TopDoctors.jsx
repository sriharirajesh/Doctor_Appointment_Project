import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col font-semibold text-gray-900 gap-2 py-4 my-16 items-center text-center'>
        <h1 classname='text-3xl font-medium'>Top Doctors to Book</h1>
        <p classname='sm:w-1/3 text-center text-sm'>Please click on the below profile of specialist</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/$(doc._id)`)} className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                <img className='bg-blue-50' src={item.image} alt=""/>
                <div className='p-4'>
                    <div classname='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>

                    </div>
                    <p className='text-gray-900 text-lg'>{item.name}</p>
                    <p classname='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
                          
                )
              

            )}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-5 cursor-pointer hover:translate-y-[-10px] transition-all duration-300'>More</button>
    </div>
  );
}

export default TopDoctors;
