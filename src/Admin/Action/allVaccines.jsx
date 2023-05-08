import React from 'react';
import { Col, Container,Button } from 'react-bootstrap';
import {Row,Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import d from './vaccine.module.css'
import Zoom from 'react-reveal/Zoom';
import AddVaccine from './addVaccine';
const AllVaccines = ({vacc,temp3,filter}) => {
    const z=temp3.map((e,idx)=>(
        <Button className='justify-content-center text-center me-3 mt-5' key={idx} onClick={()=>filter(e)}>{e}</Button>
      ))
      console.log(z)
     return (
         <Container className='justify-content-center ' id={d.cont}>
            {vacc.length >=1?<AddVaccine/>:<div></div>}
           <Zoom>  
             <Row className='justify-content-start align-content-center'id={d.cont} >
             {vacc.length >=1?<h1 style={{marginBottom:'-1rem'}} id={d.hh} className='ms-sm-4 '>All vaccine</h1>:<p></p>}
               {vacc.length >=1?vacc.map(({name,age},idx)=>(
        <Col className='col-12 col-sm-6 col-md-4 col-lg-4 mb-2 mt-5 col-xxl-2 col-xl-3' key={idx}  id={d.col}>
           <Card id={d.card} style={{ width: '18rem' }} 
             ><Link to="/" id={d.link}>
              <Card.Img variant="top" className='justify-content-center text-center' src="vac.png" />
       <Card.Body className='justify-content-center text-center bg-white'>
         <Card.Title ><h3 id={d.title}>Name: {name}</h3></Card.Title>
         <Card.Title ><h3 id={d.title}>Age: {age}</h3></Card.Title>
           </Card.Body>
         </Link>
         </Card>
         </Col> 
     )
    ):
    <p className='text center'>There is no Vaccine<AddVaccine/></p>
}
             </Row>
             </Zoom>
         </Container>
     )
}
export default AllVaccines;
