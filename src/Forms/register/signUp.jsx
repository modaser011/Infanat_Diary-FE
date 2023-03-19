import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "./sign.module.css";
import { Form,Col,Row, Alert, Container} from "react-bootstrap";
import { useState } from "react";
export function SignUp()
{  const[username,setusername]=useState(""); 
  const[Password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");

  const[error,seterror]=useState("");
  const[error2,seterror2]=useState("");
  const[error3,seterror3]=useState("");
  const validate=(e)=>
  {
e.preventDefault();
    
      const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(username);
      if((username.length >= 8 && username.length <= 15)&&letter)
    {
     seterror2("");
    }
    else 
    {
     seterror2("Username must be from 8 to 15 char and must be ");
    }
  
  
     const capsLetterCheck = /[A-Z]/.test(Password);
     const numberCheck = /[0-9]/.test(Password);
     const pwdLengthCheck = Password.length >= 8 && Password.length <= 15;
     const specialCharCheck = /[!@#$%^&*]/.test(Password);
     (capsLetterCheck&&numberCheck&&pwdLengthCheck&&specialCharCheck)?seterror3(""):seterror3("Password must be from 8 char to 15 and contain capital char,numbers and special char")
  
  
  if(Password!== confirmPassword)
    {
     seterror("confirm password doesn't match password");
    }
     else 
    {
    seterror("");
    }
}
 return (
  <Container fluid id={d.cont} className="justify-content-center align-content-center">
  <Row className="justify-content-between bg-white pb-5"id={d.cont2}  > 
  <Col className="col-md-5 align-items-start justify-content-center text-center pb-md-5"> 
  <h1>Get Started</h1>
  <h1>With</h1>
  <h1>Infant Diary</h1>
    <img src="Logo ()(1).png"className="mb-3 img-fluid" alt=""/>
  </Col>
   <Col lg={true} id={d.coll} className="col-md-7 pt-md-5">
      <Form className="text-center mx-sm-5 " onSubmit={validate}>
  <Form.Group className="mb-3" controlId="formBasicEmail" id={d.coll2}>
        <Form.Control type="text" value={username} placeholder="Enter Username" required onChange={(e)=>setusername(e.target.value)} id={d.controlx}  x="true"/>
              <Form.Label id={d.label}  class="form-control-placeholder transition">Full Name</Form.Label>
<Alert key="danger" variant="danger" style={{display:(error2==="")?"none":"block"}}  id={d.v}>
  {error2}
        </Alert>
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail" id={d.coll2}>
      <Form.Control type="email" placeholder="Enter email" required id={d.controlx} x="true" />
          <Form.Label id={d.label}  class="form-control-placeholder transition">Email address</Form.Label>
</Form.Group>
 <Form.Group className="mb-3" controlId="formBasicPassword" id={d.coll2}>
      <Form.Control type="password"  placeholder="Password" required value={Password} onChange={(e)=>setPassword(e.target.value)} id={d.controlx} x="true"/>
         <Form.Label id={d.label}  class="form-control-placeholder transition">Password</Form.Label>
 </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" id={d.coll2}>
    <Alert key="danger" variant="danger" style={{display:(error3==="")?"none":"block"}}  id={d.vv}>
      {error3}
        </Alert>
</Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword" id={d.coll2} >
      <Form.Control type="password" placeholder="confirm Password" required  value={confirmPassword} x="true"
       onChange={(e)=>setConfirmPassword(e.target.value)} id={d.controlx}/>   
          <Form.Label id={d.label} class="form-control-placeholder transition">Confirm Password</Form.Label>
    <Alert key="danger" variant="danger" style={{display:(error==="")?"none":"block"}} id={d.v}>
  {error}
        </Alert> 
    </Form.Group>       
       <Form.Group className="" controlId="formBasicPassword" id={d.coll2} >

    <button className="mb-3 btn" variant="primary" type="submit" id={d.buttun}>
      Sign up
        </button>
        </Form.Group>

</Form >
<Form className="text-center mx-sm-5 me-auto">
< Form.Group className="text-center " controlId="formBasicPassword" id={d.coll2} >
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