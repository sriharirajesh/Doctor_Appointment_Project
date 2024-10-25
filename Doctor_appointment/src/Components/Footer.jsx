import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-medium'>
            {/*---left-section--*/}
            <div>
               <img className='mb-5 w-40' src={assets.logo} alt=""/>
               <p className='w-full md:w-2/3 text-gray-500'>The Prescripto [Presc] was designed to serve as a nucleus for nurturing excellence in all aspects of health and wellness program throughout India. AIIMS are a group of autonomous public medical institutes that have been declared by an Act of Parliament 2016 as “Institute of National Importance”. Prescripto  is one of the important healthcare institutes being established by the Ministry of Health & Family Welfare, Government of India under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY).

               </p>
            </div>
            {/*---center-section--*/}
            <div>
                <p className='mt-12 text-black-500 font-semibold py-4 '>Company</p>
                <ul className='mt-1 text-voilet-500 py-2 gap-5 '>
                    <li className='mt-1'>Home</li>
                    <li className='mt-1'>About</li>
                    <li className='mt-1'>Contact Us</li>
                    <li className='mt-1'>Privacy Policy</li>
                </ul>
            </div>
            {/*---Right-section--*/}
            <div>
                <p className='font-semibold text-gray mt-12'>Get In Touch</p>
                <ul>
                    <li className='font-semibold text-green-500 gap-2 mt-1'>7023674981</li>
                    <li className='font-semibold text-red-500 gap-2 mt-1'>Raghu5673@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='text-center font-semibold '>
          <hr className=''/>
          <p>CopyRights@2017 All Rights Are Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
