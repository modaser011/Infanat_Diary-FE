import React from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import d from "./Navbar.module.css";
import Bounce from 'react-reveal/Bounce';
import {Link} from "react-router-dom";
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../assets/lgo.png";
import burger from "../assets/clipart282138.png";
import { Button } from "react-bootstrap";

function MyNavbar({r}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const datax=r.map(({png,id,link},idx)=>(
  <Link to={link} style={{textDecoration:'none'}}> <button style={{width:'100%',color:id==="Logout"?'red':'white', textDecoration:'none'}} key={idx} 
   className="mb-3 d-flex align-items-center" 
   variant="primary" 
   type="submit"
   onClick={handleClose} 
   id={d.buttun2}>
    <img src={png} className="me-4" width="20" height="20" alt=""/>
    <h4 style={{fontWeight:"600"}}>{id}</h4>        
    </button>
    </Link>
 )
 )
  return (
    
    <Navbar expand="lg" className="mb-4 mb-md-0 sticky-top" id={d.cont} >   
      <Container>
        <div className="d-flex">
       <button variant="primary"style={{border:"none" ,backgroundColor:'#006AD4'}}onClick={toggleShow} className="me-2">
      <img src={burger} width="20" height="20"
              className="d-inline-block align-top" alt=""/>
      </button> 
     <Fade left>
      <Offcanvas show={show} onHide={handleClose} scroll='true' id={d.offc}> 
        <Offcanvas.Body>
          <Offcanvas.Header className="justify-content-center text-center">
           <Link to='/' ><img src={logo} width="100" height="100" onClick={handleClose}
               alt=""/></Link>  
        </Offcanvas.Header>
         {datax}
        </Offcanvas.Body>
     </Offcanvas>
      </Fade>
      <Bounce top><Navbar.Brand><Link to="/"><img src={logo} width="120"
              height="100"
              className="d-inline-block align-top" alt=""/> </Link></Navbar.Brand></Bounce></div> 
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll basic-navbar-nav me-auto ">
          <Nav
            className="my-2 my-lg-0 me-auto"
            navbarScroll>
          </Nav>
            <Link to="/RegisterParent"><Button id={d.btn} className="me-3 btn " variant="outline-light">Sign up</Button></Link>
            <Link to="/login"><Button  id={d.btn}className="" variant="outline-light">Login</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;