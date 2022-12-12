import { useState } from 'react';
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Header from '../components/Services-section/Header/Header'
import Ourservices from '../components/Services-section/Ourservices/Ourservice'
import Letschat from '../components/Services-section/Letschat/Letschat'
// import Map from './components/service-section/Map/Map';
import Formservice from '../components/Services-section/Formservice/Formservice'
import Footer from "../components/Home-section/Footer/Footer"


function Services() {
  const [state, setstate] = useState(true)
  const closeme=(state)=>{
    setstate(false)
  }
    return (
      <>
        <TheNavbar/>
        <Header/>
        <Ourservices closeme={closeme}/>
        <Letschat/>
        <Formservice />
        <Footer/>
        {/* <Map /> */}
      </>
    )
  }
  
  export default Services