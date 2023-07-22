import React from 'react';
import {observer} from 'mobx-react-lite';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../../../index';

const AuthorizationForm =  ()=> {
const {store} = React.useContext(Context)
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')




  return (
    <Form >
       <h3 style={{textAlign: 'center'}} >Авторизация</h3>
      
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email"
         placeholder="Введите email" 
         onChange={event=> setEmail(event.target.value)}
         />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
         type="password" 
         placeholder="Введите пароль"
         onChange={event=> setPassword(event.target.value)}
         />
          <Form.Text className="text-danger">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-flex justify-content-end'>

      <Button onClick={()=> store.login(email, password)} className='mr-4 fs-5' variant="dark" >
        Войти
      </Button>
      </div>
    </Form>
  );
}



export default observer(AuthorizationForm)