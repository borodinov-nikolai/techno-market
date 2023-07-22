import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthorizationForm from './AuthorizationForm';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';



const ModalWindowAutorization = observer (()=>  {
  const {store} = React.useContext(Context);
  const [show, setShow] = React.useState(false)
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
   

 

  return (
    <>
      <Button style={{fontSize: '20px'}} variant={'dark'} onClick={handleShow}>
       Войти
      </Button>

      <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AuthorizationForm/>
          </Modal.Body>
        <Modal.Footer>
         
          
        </Modal.Footer>
      </Modal>
    </>
  );
})

export default ModalWindowAutorization