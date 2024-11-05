import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const {docId} = useParams()
    const {doctors,currency_symbol} = useContext(AppContext)
     
    const [docInfo,setDocInfo] = useState(null)

      const fetchDocInfo = async () =>{
        const docInfo = doctors.filter((doc) => {
            console.log("Each Doctor Info", doc);
            return doc._id === docId;
          });
        setDocInfo(docInfo?.[0])
        console.log(docInfo)
      }
      
     

    useEffect ( ()=>{
        fetchDocInfo()
    },[doctors,docId])
     
  return (
    <div className='flex flex-col  md:flex-col gap-4 relative '>
        {/*---Doctor_Details---*/}
        <div >
            <div>
               <img className='bg-primary w-full sm:max-w-72 rounded-lg mb-2  ' src={docInfo?.image} alt=""/>
            </div>
            <div className='flex-1 border border-green-600 rounded-lg p-8 py-7 bg-white mx-2 sm:max-0 mt-[-80px] sm:mt-0 gap-4 mt-4 hover:box-shadow-[2xl]'>
            <div>
                <p className='text-2xl font-medium text-gray-700'>{docInfo?.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
            </div>
            <div className='gap-2 text-sm text-gray-600 mt-1'>
                <p>{docInfo?.degree}- {docInfo?.speciality}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo?.experience}</button>
            </div>
            <div className='text-sm font-medium text-gray-800 mt-3'>
                <p >About <img src={assets.info_icon} alt="" /></p>
                <p className='text-sm text-gray-500 mt-1'>{docInfo?.about}</p>
            </div>
            <p className='text-violet-700 font-medium mt-1 '>Appointment:<span>{currency_symbol}{docInfo?.fees}</span></p>
            </div>
        </div>
    </div>
    
  );
}

 export default Appointment;
