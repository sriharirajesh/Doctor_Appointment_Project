import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets';

const About = () => {
  return (
    <div>
       <div className='text-center text-2xl text-gray-500'>
        <p> <span className='text-gray-700 font-medium'>About Us</span></p>
       </div>
       <div className='my-12 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[400px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to prescripto,Your Trusted Partner Of Your HealthCare Needs Conveniently and Efficiently. At prescripto, We Understand The Challenges That Each Individual Faces When It Comes To Scheduling The Doctor Appointments and Managing The Health Records </p>
            <p>Prescripto Is Committed To Excellence In The HealthCare System.We Continuously Strive To Enhance Our Platform, Integreating The Latest Advancements To Improve and Deliver Superior Service. Whether You're Booking Your First Appointment,Prescripto Is Here To Help You In Every Step Of The Way.   </p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our Vision At Prescripto Is To Create A SeamLess HealthCare Experience For The Users.We Aim To Bridge The Gap Between The Paitent's and The HealthCare Providers. Prescripto Is Making Very Easy To Connnect With The Doctors As Their Requirements. </p>

        </div>
       </div>
       <div className='text-xl my-4'>
        <b className='text-violet-700 font-medium'> WHY CHOOSE US</b>
       </div>
       <div className='flex flex-col md:flex-row mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>Efficiency:</b>
            <p>Steamlined Appointment Scheduling That Fits Into Your Busy Life-Style</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convience:</b>
            <p>Access To A NetWork Of Trusted HealthCare Professionals In your Area</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization:</b>
            <p>Tailored Recommendations and Reminders To help You To Stay On Top Of Your Health</p>
         </div>
       </div>
    </div>
  );
}

export default About;
