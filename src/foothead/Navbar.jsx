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
      <Container fluid>
        <div className="d-flex">
       <button variant="primary"style={{border:"none" ,backgroundColor:'#006AD4'}}onClick={toggleShow} className="me-2">
      <img src="clipart282138.png" width="30" height="30"
              className="d-inline-block align-top" alt=""/>
      </button> 
     <Fade left>
      <Offcanvas show={show} onHide={handleClose} scroll='true' id={d.offc}> 
        <Offcanvas.Body>
          <Offcanvas.Header className="justify-content-center text-center">
           <Link to='/' ><img src="Logo ()(1).png" width="100" height="100" onClick={handleClose}
               alt=""/></Link>  
        </Offcanvas.Header>
         {datax}
        </Offcanvas.Body>
     </Offcanvas>
      </Fade>
      <Bounce top><Link to="/"><img src="Logo ()(1).png" width="90" height="90"
              className="d-inline-block align-top" alt=""/> </Link></Bounce></div> 
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll basic-navbar-nav me-auto ">
          <Nav
            className="my-2 my-lg-0 me-auto"
            navbarScroll>
          </Nav>
            <Link to="/RegisterParent"><button id={d.btn} className="me-3 btn" variant="primary">Sign up</button></Link>
            <Link to="/login"><button  id={d.btn}className="me-3 btn" variant="primary">Login</button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;