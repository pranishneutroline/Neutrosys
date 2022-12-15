import React from 'react'
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Header from '../components/Careers-section/Header/Header'
import WorkWithUs from '../components/Careers-section/WorkWithUs/WorkWithUs'
import Jobs from '../components/Careers-section/Jobs/JobsBtn';
import Resume from '../components/Careers-section/Resume/Resume';
import Footer from '../components/Home-section/Footer/Footer';

function Careers() {
    return (
      <>
        <TheNavbar/>
        <Header /> 
        <WorkWithUs/>
        <Jobs/>
        <Resume/>
        <Footer />
        {/* <Map /> */}
      </>
    )
  }
  
  export default Careers