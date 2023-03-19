import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "./login.module.css";
import { Form,Col,Row, Container} from "react-bootstrap";
import { useState } from "react";
import {Link} from "react-router-dom";

export function Login()
{ 
  const[Password,setPassword]=useState("");

 return (
  <Container fluid id={d.cont} className="justify-content-center mt-5">
  <Row className=" justify-content-between pb-5" id={d.cont}> 
  <Col className="col-md-5 justify-content-center text-center pb-md-3"> 
  <h1>Welcome Back</h1>
    <img src="Logo ()(1).png"className="mb-3 img-fluid" alt=""/>
  </Col>
   <Col lg={true} id={d.coll} className="col-md-7 pt-md-5">
    
      <Form className="text-center me-auto mx-sm-5" id={d.formx}>
    <Form.Group className="mb-4" controlId="formBasicEmail" id={d.coll2}>
      <Form.Control type="email" placeholder="Enter email" required id={d.controlx} x="true" />
          <Form.Label id={d.label}  class="form-control-placeholder transition">Email address</Form.Label>
</Form.Group>
 <Form.Group className="mb-4" controlId="formBasicPassword" id={d.coll2} >
      <Form.Control type="password"  placeholder="Password" required value={Password} onChange={(e)=>setPassword(e.target.value)} id={d.controlx} x="true"/>
         <Form.Label id={d.label}  class="form-control-placeholder transition">Password</Form.Label>    
        <p className="text-end" id={d.p} ><Link to="/forget" id={d.p}>Fotget Password?</Link></p> 
</Form.Group>
       <Form.Group className="" controlId="formBasicPassword" id={d.coll2} >
    <button className="mb-3 btn" variant="primary" type="submit" id={d.buttun}>
      Sign In
        </button>
        </Form.Group>
</Form> 
<Form className="text-center mx-sm-5">
< Form.Group className="text-center" controlId="formBasicPassword" id={d.coll2} >
    <button className="mb-3 d-flex justify-content-center text-center align-items-center" variant="primary" type="submit" id={d.buttun2}>
    <img src="google.png" className="h-75 h-75 me-4" alt=""/>
      Sign Up with Google
        </button>
        </Form.Group>
        </Form>
    </Col>
  </Row>
</Container>
);  
}