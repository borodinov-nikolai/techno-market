import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegistrationForm from './RegistrationForm';



const ModalWindowRegistration = () => {
    const [show, setShow] = React.useState();

 
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <Button style={{fontSize: '20px'}} variant="dark" onClick={handleShow}>
     Регистрация
    </Button>

    <Modal size={'lg'} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <RegistrationForm/>
        </Modal.Body>
      <Modal.Footer>
       
        
      </Modal.Footer>
    </Modal>
  </>
);
  
}

export default ModalWindowRegistration