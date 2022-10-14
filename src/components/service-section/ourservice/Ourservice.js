import React,{useState} from 'react'
import './ourservice.css'
import data from './data'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
const Ourservice = () => {
  const [state, setstate] = useState(false)
  const callMe=()=>{
    setstate(!state);
  }
  const closeButton=()=>{
    setstate(false)
  }
  return (
    
   <div className="Servicemainbody">
   <div className="mainbox">
   {data.map((item)=>{return(
   <div className="mainData" key={item.id} onClick={callMe}>
   <img src={item.image} alt="" />
   <h4>{item.heading}</h4>
   <p>{item.disc}</p>
   </div>)
   })}
   </div>
   <Modal show={state} className='dbyaModal'>
   <Modal.Header closeButton onClick={closeButton}>
    
   </Modal.Header>
   <Modal.Body>
   <h5 className=''>MobileApp Development </h5>
   <p>Mobile app development creates applications specifically for mobile devices. 
   Marketers can use mobile applications to manage content, share special offers,
    disseminate information, drive e-commerce, or make services available. 
    The average marketer can use modern tools to drag, drop, and deliver a basic app.</p>
    
   </Modal.Body>
   
   </Modal>
   </div>
   
  )
}

export default Ourservice