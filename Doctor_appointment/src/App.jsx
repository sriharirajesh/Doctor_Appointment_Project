import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAppointment from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
import Appointment from './pages/Appointment';
import NavBar from './components/NavBar';
import Footer from './Components/Footer';

const App = () =>{
      
     return(
      <div className='mx-4 sm:mx-[10%]'>

        <NavBar/>
       

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/doctors/:speciality' element={<Doctors/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myprofile' element={<MyProfile/>} />
          <Route path='/myappointment' element={<MyAppointment/>} />
          <Route path='/appointment/:docId' element={<Appointment/>} />
          
        </Routes>
        <Footer/>

      </div>
     )

}

export default App