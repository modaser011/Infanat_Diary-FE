import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "./login.module.css";
import { Form,Col,Row, Container, Alert} from "react-bootstrap";
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Login()
{
 const nav=useNavigate()
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState(""); 
const[err,seterr]=useState('')
  const validate=async(e)=>{
    e.preventDefault();
    const vals={email:email,
    password:password}
    var json = JSON.stringify(vals)
const res=await axios.post('https://infant-diary-backend.onrender.com/api/v1/parent/signin', json,{headers:{'Content-Type':'application/json'}})
.then(res=>{
  if(res.status === 200) {
    nav('/');
} else {
    console.log(res.data.Error);
}      })
.catch(err => seterr(err.response.data.message));
}

 return (
  <Container id={d.cont} className="justify-content-center me-5 mt-sm-5 mt-xs-5 justify-content-center align-item-center text-center d-flex">
  <Row className="pb-5 container py-auto my-auto">
  <Col className="col-md-5 my-auto ms-auto text-center text-md-start">
  <h1>Welcome </h1>
  <h1>Back</h1>
    <img src="Logo ()(1).png"className=" img-fluid " alt=""/>
  </Col>
   <Col lg={true} id={d.coll} className="col-md-7 my-auto mx-auto ">
      <Form className="text-center mx-3" id={d.form} onSubmit={validate}>
    <Form.Group className="mb-2" id={d.grb1}>
      <Form.Control type="email" placeholder="Enter email" required id={d.email} x="true"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Form.Label id={d.label}  class="form-control-placeholder transition">Email address</Form.Label>
</Form.Group>
 <Form.Group className="mb-2"  id={d.grb2} >
      <Form.Control type="password"  placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} id={d.password} x="true"/>
         <Form.Label id={d.label1}  class="form-control-placeholder transition">Password</Form.Label>    
        <p className="text-end" id={d.p} ><Link to="/forget" id={d.p}>Fotget Password?</Link></p> 
        {err && <Alert key="danger" variant="danger" id={d.v}>{err}</Alert>}

</Form.Group>
       <Form.Group className=""  id={d.grb3} >
    <button className="mb-3 btn" variant="primary" type="submit" id={d.buttun}>
      Sign In
        </button>
        </Form.Group>
</Form> 
<Form className="text-center mx-3">
< Form.Group className="text-center" id={d.coll2} >
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