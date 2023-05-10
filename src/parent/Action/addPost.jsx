import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import d from './babies.module.css'
import axios from 'axios';

const AddPost = () => {
    //const nav=useNavigate()
    const [show, setShow] = useState(false);
    const [vals,setVals]=useState({name:'',
    body:'',
    gender:''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleInput=(e)=>
  {
    setVals(prev => ({...prev, [e.target.name]:e.target.value}))
  }
    const validate=(e)=>{
    e.preventDefault();
   
      var json = JSON.stringify(vals)
      axios.post('https://infant-diary-backend.onrender.com/api/v1/parent/addPost', json,{headers:{'Content-Type':'application/json'}})
      .then(res=>{
        if(res.status === 200) {
        setShow(false)
      } else {
          console.log(res.data.Error);
      }      })
      .catch(err => alert(err.response.data.message));
     
     } 
    
    return (
        <div className='mt-3 mb-3 text-center '><Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new Baby      
       </Button>
<Modal show={show} onHide={handleClose} className='my-auto'>
 <Modal.Header style={{border:'none'}} closeButton>
 </Modal.Header>
 <Modal.Body className='my-auto'>
 <Form className="text-center mx-sm-5"onSubmit={validate} >
 <Form.Group className="mb-3" controlId="formBasicPassword" id={d.coll2}>
                     <Form.Control as="textarea" placeholder="what is new" value={vals.body} name='body' required id={d.controlx} onChange={handleInput}   x="true" />
</Form.Group>

</Form >
 </Modal.Body>
</Modal>
</div>
    );
    }

export default AddPost;
