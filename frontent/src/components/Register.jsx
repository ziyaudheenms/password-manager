import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Register() {
  const [username , SetUsername] = useState('')
  const [password , SetPassword] = useState('')
  const [email , SetEmail] = useState('')
  const navigate = useNavigate();

  const show = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/v1/auth/create/', {
      username: username,
      password: password,
      email :email,
    })
    .then(function (response) {
      console.log(response);
      if(response.data.status_code == 400){
        navigate('/');
      }else{
        alert('account with this username already exists')
      }

      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="container my-5">
      <h1 className="text-center">REGISTER  YOUR ACCOUNT</h1>
      <Form className="my-5  mx-auto bg-light p-5 help" onSubmit={show}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="TEXT" placeholder="ENTER YOUR USERNAME" required value={username} onChange={(e) => {
            SetUsername(e.target.value)
          }}/>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control type="email" placeholder="ENTER YOUR EMAIL" required value={email} onChange={(e) => {
            SetEmail(e.target.value)
          }}/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="PASSWORD" required minLength={6} maxLength={8} value={password} onChange={(e) => {
            SetPassword(e.target.value)
          }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
