import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import '../App.css'
import Swal from 'sweetalert2'

function BasicExample() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [account, setAccount] = useState("");
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const handlEvent = (e) => {
    e.preventDefault();
    console.log(username, password, account);
    const apiUrl = "http://localhost:8000/api/v1/manager/create/";
    const data = {
      username: username,
      password: password,
      account: account,
    };

    // Configuration object with the Authorization header
    const config = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    // POST request with Axios
    axios
      .post(apiUrl, data, config)
      .then((response) => {
        // Handle the response here
        console.log(response.data);
        
        window.location.reload();
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  };

  

  return (
    <Form onSubmit={handlEvent} className="help  bg-light p-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Account Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your account"
          value={account}
          maxLength={10}
          required
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          maxLength={10}
          value={username}
          required

          onChange={(e) => {
            SetUsername(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          maxLength={8}
          required

          value={password}
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          your passwor is visible only to you
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
