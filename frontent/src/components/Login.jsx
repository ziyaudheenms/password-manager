import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useEffect , useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert'
function Login() {
  const navigate = useNavigate();
  const [username , SetUsername] = useState('')
  const [password , SetPassword] = useState('')

  const show = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/v1/auth/token/', {
      username: username,
      password: password
    })
    .then(function (response) {
      const ACCESS_TOKEN = response.data.access
      console.log(ACCESS_TOKEN);
      localStorage.setItem("ACCESS_TOKEN" , ACCESS_TOKEN)
      navigate('/mypage');

    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  return (
    <div className="container my-5">
      <h1 className="text-center">LOGIN TO YOUR PAGE</h1>
      <Form className="my-5  mx-auto bg-light p-5 help"  onSubmit={show}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="TEXT" placeholder="ENTER YOUR USERNAME" required value={username} onChange={(e) => {
            SetUsername(e.target.value)
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
      <Alert heading = 'register now if you are first here' content = "register to login to your manager page .Have a happy user experience there.."/>

      
    </div>
  );
}

export default Login;
