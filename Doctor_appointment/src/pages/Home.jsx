import React from 'react';
import Bannner from '../Components/Bannner';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SpecialityMenu from '../Components/SpecialityMenu';
import TopDoctors from '../Components/TopDoctors';


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Bannner/>
    </div>
  );
}

export default Home;
