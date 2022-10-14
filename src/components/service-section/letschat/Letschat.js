import React,{useState} from 'react'
import './letschat.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'



const Letschat = () => {
  const [init,setInit]= useState(false);
  
 const invoke=()=>{
 return setInit(!init)
 }
 const close=()=>{
 setInit(false)
 }
 
  return (
    <div className="letschatmain">
    <div className="letschatcontent">
    <h3>We would love to hear about your business and technology goals</h3>
    <p>It's time to make your business more successful with our professional IT solutions. Let’s connect and talk to find out how our company can benefit you from our services.</p>
    <button onClick={invoke}>let's Chat</button>
    <Modal show={init}>
    <Modal.Header closeButton onClick={close} >
    IT consulting PVT LTD
    </Modal.Header>
    <Modal.Body>Chat with us and share your business ideas</Modal.Body>
    <Button variant="primary"  >
            Use Messanger  
          </Button>
          <Button variant="light" >
           Continue as Guest
          </Button>
          <p>By continuing as a guest, you agree to Meta's Terms, Privacy Policy and Cookies Policy.</p>
    </Modal>
    
    </div>
    
    </div>
  )
}

export default Letschat