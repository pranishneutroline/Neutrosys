import React from 'react'
import Footer from './components/Home-section/Footer/Footer'
import Header from './components/Home-section/Header/Header'
import Navbar from './components/Home-section/Navbar/Navbar'
import OurClients from './components/Home-section/OurClients/OurClients'
import OurPartners from './components/Home-section/OurPartners/OurPartners'
import ReadyToHelp from './components/Home-section/ReadyToHelp/ReadyToHelp'
import Services from './components/Home-section/Services/Services'
import WhoWeAre from './components/Home-section/WhoWeAre/WhoWeAre'

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <WhoWeAre />
        <Services />
        <OurPartners/>
        <OurClients />
        <ReadyToHelp />
        <Footer />
    </div>
  )
}

export default App