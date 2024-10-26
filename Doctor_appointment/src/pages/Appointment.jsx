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
        console.log(doctors)
      }
      
     

    useEffect ( ()=>{
        fetchDocInfo()
    },[doctors,docId])
     
  return (
    <div>
       {/*---Doctor details--*/}
       <div>
         <div>
            <img src={doctors} alt=""/>
            </div>
       </div>
        <div>
            <p>{doctors}</p>
        </div>
    </div>
  );
}

 export default Appointment;
