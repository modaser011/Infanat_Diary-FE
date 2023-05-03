import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "../sign.module.css";
import { Form,Col,Row, Alert, Container} from "react-bootstrap";
import InputMask from "react-input-mask";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ParentValidate from "./parentValidate";
import axios from "axios";
export function RegisterParent()

{ 
  const nav=useNavigate()
 

  const [vals,setVals]=useState(
  {name:'',
  Password:'',
  email:'',
  confirmPassword:'',
  phone:''})
  const [errors,setErrors]= useState({})
  const handleInput=(e)=>
  {
    setVals(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const validate=(e)=>
  {
e.preventDefault();
setErrors(ParentValidate(vals)) 
let xc=ParentValidate(vals)
 if(xc.name===""&&xc.Password===""&&xc.confirmPassword==="")
 {
 var json = JSON.stringify(vals)
 console.log(json)
 axios.post('http://localhost:8081/login', json)
 .then(res => {
     if(res.data.Status === 'Success') {
         nav('/');
     } else {
         console.log(res.data.Error);
     }
 })
 .catch(err => console.log(err));
  }
}
 return (
  <Container id={d.cont} className="justify-content-center align-content-center">
  <Row className="justify-content-between align-items-center bg-white pb-5"id={d.cont2}  > 

  <Col className="col-md-5 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0"> 
  <h1>Get Started</h1>
  <h1>With</h1>
  <h1>Infant Diary</h1>
    <img src="Logo ()(1).png"className="mb-3 img-fluid" alt=""/>
  </Col>


   <Col lg={true} id={d.coll} className="col-md-7 pt-md-5">
      <Form className="text-center mx-sm-5 " onSubmit={validate}>
  <Form.Group className="mb-2" id={d.coll2}>
        <Form.Control type="text"placeholder="Enter Username" required onChange={handleInput} id={d.controlx} value={vals.name}  x="true" name="name"/>
              <Form.Label id={d.label}  class="form-control-placeholder transition">Full Name</Form.Label>
              {errors.username && <Alert key="danger" variant="danger" id={d.v}>{errors.username}</Alert>}
  
        </Form.Group>

    <Form.Group className="mb-2" id={d.coll2}>
    <Form.Control type="email" placeholder="Enter email" onChange={handleInput} required id={d.controlx} x="true" name="email" value={vals.email} />
          <Form.Label id={d.label}  class="form-control-placeholder transition">Email address</Form.Label>
</Form.Group>
<Form.Group className="mb-2" id={d.coll2} >     
  <InputMask id={d.controlx2} x="true"
        className="number" 
        name='phone'
        value={vals.phone}
        onChange={handleInput}
        mask="+20\(999) 999-9999"
        maskChar=" "
        required
        placeholder="Phone number"
      />    
      <Form.Label id={d.label} class="form-control-placeholder transition">Phone</Form.Label>
          </Form.Group> 
 <Form.Group className="mb-2" id={d.coll2}>
      <Form.Control type="password"  placeholder="Password" required  onChange={handleInput} id={d.controlx} x="true" value={vals.Password} name="Password" />
         <Form.Label id={d.label}  class="form-control-placeholder transition">Password</Form.Label>  
         {errors.Password && <Alert key="danger" variant="danger" id={d.v}>{errors.Password}</Alert>}

 </Form.Group>             
      <Form.Group className="mb-2" id={d.coll2}>
      <Form.Control type="password" placeholder="confirm Password" required  value={vals.confirmPassword} name="confirmPassword" x="true"
       onChange={handleInput} id={d.controlx}/>   
          <Form.Label id={d.label} class="form-control-placeholder transition">Confirm Password</Form.Label>
          {errors.confirmPassword && <Alert key="danger" variant="danger" id={d.v}>{errors.confirmPassword} </Alert>}
    </Form.Group>   

       <Form.Group className="" id={d.coll2} >
    <button className="mb-2 btn" variant="primary" type="submit" id={d.buttun}>
      Sign up
        </button>
        </Form.Group>

</Form >
<Form className="text-center mx-sm-5 me-auto">
< Form.Group className="text-center"  id={d.coll2} >
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