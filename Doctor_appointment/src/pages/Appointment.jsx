import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const {docId} = useParams()
    const {doctors} = useContext(AppContext)
     
    const [docInfo,setDocInfo] = useState(null)

      const fetchDocInfo = async () =>{
        const docInfo = doctors.find(item => item._id === docId)
        setDocInfo(docInfo)
        console.log(docInfo)
      }
      
     

    useEffect ( ()=>{
        fetchDocInfo()
    },[doctors,docId])
     
  return (
    <div>
       {/*---Doctor details--*/}
       <div>
         <div>
            <img src={docInfo} alt=""/>
            </div>
       </div>
        <div>
            <p>{docInfo}</p>
        </div>
    </div>
  );
}

 export default Appointment;
