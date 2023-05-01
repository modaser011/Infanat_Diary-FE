import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "./forget.module.css";
import { Form,Col,Row, Alert, Container} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Forget()
{  const[Password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");

  const[error,seterror]=useState("");
  const[error3,seterror3]=useState("");
  const validate=(e)=>
  {
e.preventDefault();
    
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
   <Container fluid id={d.cont} className="justify-content-center">
   <Row className=" justify-content-center" id={d.cont}> 
   <Col className="col-md-8  col-lg-6  justify-content-center text-center pb-md-3 "> 
   <div className="justify-content-center mb-5 text-center"> 
   <img src="Password.png" style={{width:"40px",height:"40px"}} alt="" /> 
   <br/>
   <h3>Set New Password</h3>
   </div>
      <Form className="text-center" id={d.formx} onSubmit={validate}>
 <Form.Group className="mb-3" id={d.coll2}>
      <Form.Control type="password"  placeholder="Enter New Password" required value={Password} onChange={(e)=>setPassword(e.target.value)} id={d.controlx} x="true"/>
         <Form.Label id={d.label} class="form-control-placeholder transition">New Password</Form.Label>
 </Form.Group>
    <Form.Group className="mb-3" id={d.coll2}>
    <Alert key="danger" variant="danger" style={{display:(error3==="")?"none":"block"}}  id={d.vv}>
      {error3}
        </Alert>
</Form.Group>
      <Form.Group className="mb-3" id={d.coll2} >
      <Form.Control type="password" placeholder="confirm New Password" required  value={confirmPassword} x="true"
       onChange={(e)=>setConfirmPassword(e.target.value)} id={d.controlx}/>   
          <Form.Label id={d.label} class="form-control-placeholder transition">Confirm Password</Form.Label>
    <Alert key="danger" variant="danger" style={{display:(error==="")?"none":"block"}} id={d.v}>
  {error}
        </Alert> 
    </Form.Group>       
       <Form.Group className="mb-3" id={d.coll2} >

    <button className="mb-3 btn" variant="primary" type="submit" id={d.buttun}>Reset Password</button>
        </Form.Group>

</Form>
<div className="d-flex justify-content-center mb-5 text-center">
   
   <Link to="/login"><img src="back-button.png" style={{width:"30px",height:"30px"}} alt="" className="me-3" /></Link> 
   <br/>
   <Link to="/login" id={d.p}><h3>Back to Login </h3></Link>

   </div>
  </Col>
  </Row>
</Container>
);  
}