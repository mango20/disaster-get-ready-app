import React from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="loginCont">
      <Form className="loginInpCont">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control type="text" className="loginInp" />
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control type="password" className="loginInp" />
          </Form.Group>
        </Form.Group>
        <Button className="loginSubmit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
