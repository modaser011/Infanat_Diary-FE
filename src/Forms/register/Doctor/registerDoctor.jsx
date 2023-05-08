import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "../sign.module.css";
import DoctorValidate from "./doctorValidate";
import { Form,Col,Row, Alert, Container} from "react-bootstrap";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import InputMask from "react-input-mask";
import axios from "axios";
const RegisterDoctor = () => {
    const nav=useNavigate()
    const [nationalIdPhoto, setnationalIdPhoto] =useState();
    const [vals,setVals]=useState({
  name:'',
  password:'',
  email:'',
  confirmpassword:'',
  phone:'',
  age:32
  ,gender:'Male'})
  const [errors,setErrors]= useState({})
  const handleInput=(e)=>
  {
    setVals(prev => ({...prev, [e.target.name]:e.target.value}))
  }
  const validate=(e)=>
  {
e.preventDefault();
setErrors(DoctorValidate(vals)) 
let xc=DoctorValidate(vals)
console.log(nationalIdPhoto)
vals.nationalIdPhoto=nationalIdPhoto
const form=new FormData()
form.append("nationalIdPhoto",nationalIdPhoto)
console.log(form)

 if(xc.name===""&&xc.password===""&&xc.confirmpassword==="")
 { 
  var json = JSON.stringify(vals)
  console.log(json)

 axios.post('https://infant-diary-backend.onrender.com/api/v1/doctor/signup', {json,form},{headers:{'Content-Type':'application/json'}})
 .then(res=>{
  if(res.status === 200){
    nav('/');
} else {
    alert(res.data.Error);
}      })
.catch(err => alert(err.response.data.message))
  }
}  

       return (
        <Container id={d.cont} className="justify-content-center align-content-center justify-content-center me-5 mt-sm-5 mt-xs-5 justify-content-center align-item-center text-center d-flex">
          <Row className="justify-content-between align-items-center bg-white pb-5 container"id={d.Row}  > 
          <Col className="col-md-5 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 text-center text-md-start"> 
        <h1>Get Started</h1>
        <h1>With</h1>
        <h1>Infant Diary</h1>
          <img src="Logo ()(1).png"className="mb-3 img-fluid" alt=""/>
        </Col>
        <Col lg={true} id={d.coll} className="col-md-7 pt-md-5 my-auto mx-auto">
            <Form className="text-center mx-3 " onSubmit={validate}>
        <Form.Group className="mb-2" id={d.coll0}>
        <Form.Control type="text"placeholder="Enter Username" required onChange={handleInput} id={d.name} value={vals.name}  x="true" name="name"/>
              <Form.Label id={d.label0}  class="form-control-placeholder transition">Full Name</Form.Label>
                    {errors.name && <Alert key="danger" variant="danger" id={d.v}>{errors.name}</Alert>}

              </Form.Group>
      
          <Form.Group className="mb-2" id={d.coll1}>
          <Form.Control type="email" placeholder="Enter email" onChange={handleInput} required id={d.email} x="true" name="email" value={vals.email} />
                <Form.Label id={d.label1}  class="form-control-placeholder transition">Email address</Form.Label>
      </Form.Group>
      <Form.Group className="mb-2" id={d.coll2} >     
  <InputMask id={d.phone} x="true"
        className="number" 
        name='phone'
        value={vals.phone}
        onChange={handleInput}
        mask="+20\ 999 9999 999"
        maskChar=" "
        required
        placeholder="Phone number"
      />    
      <Form.Label id={d.label2} class="form-control-placeholder transition">Phone</Form.Label>
          </Form.Group> 
       <Form.Group className="mb-2" id={d.coll3}>
       <Form.Control type="password"  placeholder="Password" required  onChange={handleInput} id={d.password} x="true" value={vals.password} name="password" />
               <Form.Label id={d.label3}  class="form-control-placeholder transition">Password</Form.Label>  
               {errors.Password && <Alert key="danger" variant="danger" id={d.v}>{errors.password}</Alert>}

               </Form.Group>             
      <Form.Group className="mb-2" id={d.coll4}>
      <Form.Control type="password" placeholder="confirm Password" required  value={vals.confirmpassword} name="confirmpassword" x="true"
       onChange={handleInput} id={d.confirm}/>   
          <Form.Label id={d.label4} class="form-control-placeholder transition">Confirm Password</Form.Label>
          {errors.confirmpassword && <Alert key="danger" variant="danger" id={d.v}>{errors.confirmpassword} </Alert>}
    </Form.Group> 

          <Form.Group className="mb-2" id={d.coll5}>
        <Form.Control type="file" size="lg" id={d.file} required x="true"  style={{textAlign:'start'}} onChange={(e)=>setnationalIdPhoto(e.target.files[0])}  webkitdirectory multiple/>
        <Form.Label id={d.label5}>NationalId photo</Form.Label>
      </Form.Group>
      
             <Form.Group className="" id={d.coll6} >
          <button className="mb-2 btn" variant="primary" type="submit" id={d.buttun}>
            Sign up
              </button>
              </Form.Group>
      
      </Form >
      <Form className="text-center mx-3">
      < Form.Group className="text-center"  id={d.coll7}>
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
export default RegisterDoctor;