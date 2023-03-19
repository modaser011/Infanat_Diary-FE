import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import d from "./forget.module.css";
import {Col,Row, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
export function ForgetConfirm()
{  

 return (
  <Container className="justify-content-center mt-5"id={d.cont}>
  <Row className="justify-content-center" id={d.cont} > 
   <Col lg={true} id={d.coll} className="col-lg-8 col-xl-7 col-xs-11 col-sm-10 col-md-9  pt-5 ">
   <div className="justify-content-center mb-5 text-center"> 
   <img src="mail.png" style={{width:"40px",height:"40px"}} alt="" /> 
   <br/>
   <h3 className="mb-3">Check Your Email</h3>
   <p className="text-muted">
We sent a password rest link to user.Email</p>
<p className="text-muted">
user.Email</p>
<div className="d-flex text-center justify-content-center">
<p className="text-muted ">Didn't recieve email?&nbsp;</p>
<p>Didn't recieve email?</p>
</div>
   </div>    
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