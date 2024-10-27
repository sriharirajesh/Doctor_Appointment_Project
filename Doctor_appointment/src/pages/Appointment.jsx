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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {/*---Doctor details--*/}
      <div>
        <div>
          <img src={docInfo?.image} alt="" />
        </div>
      </div>
      <div>
        <p>Name: {docInfo?.name}</p>
      </div>
    </div>
  );
}

 export default Appointment;
