import React from 'react';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Alert,Button} from 'react-bootstrap';
import d from './babies.module.css'
import {useNavigate} from "react-router-dom";
import Validateclinic from './validateclinic';
import InputMask from "react-input-mask";
const Clinic = () => {
    const [show, setShow] = useState(false);
    const [vals,setVals]=useState({name:'',
  email:'',
  phone:''
})
  
    const handleInput=(e)=>
  {
    setVals(prev => ({...prev, [e.target.name]:e.target.value}))
  }
  const [errors,setErrors]= useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const validate=(e)=>{
    e.preventDefault();
    setErrors(Validateclinic(vals)) 
    let xc=Validateclinic(vals)
     if(xc.name==='')
     {
      setShow(false)
     } 
    }
    return (
        <div className='mt-3 mb-3 text-center '><Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new Baby      
       </Button>
<Modal show={show} onHide={handleClose}>
 <Modal.Header style={{border:'none'}} closeButton>
 </Modal.Header>
 <Modal.Body>
 <Form className="text-center mx-sm-5"onSubmit={validate} >
<Form.Group className="mb-2" id={d.coll2}>
        <Form.Control type="text"placeholder="Enter Username" required onChange={handleInput} id={d.controlx} value={vals.username}  x="true" name="username"/>
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


<Form.Group className="" id={d.coll2} >
<button className="mb-2 btn" variant="primary" type="submit" id={d.buttun}>
     Add
</button>
 </Form.Group>

</Form >
 </Modal.Body>
</Modal>
</div>
    );
}


export default Clinic;
