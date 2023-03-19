import React from 'react';
import { Col, Container } from 'react-bootstrap';
import {Row,Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import d from './info.module.css'
import Zoom from 'react-reveal/Zoom';
const Info = ({infox}) => {
    const datax=infox.map(({info},idx)=>(
       <Col className='col-12 col-sm-6 col-md-4 col-lg-4 mb-2 mt-5 col-xxl-2 col-xl-3' key={idx}  id={d.col}>
          <Card id={d.card} style={{ width: '18rem' }} 
            ><Link to="/" id={d.link}>
             <Card.Img variant="top" className='justify-content-center text-center' src="image.jpg" />
      <Card.Body className='justify-content-center text-center'>
        <Card.Title ><h3 id={d.title}>{info}</h3></Card.Title>
          </Card.Body>
        </Link>
        </Card>
        </Col> 
    )
    )
    return (
        <Container className='justify-content-center ' id={d.cont}>
          <Zoom>  
            <Row className='justify-content-start align-content-center'id={d.cont} >
              {datax}
            </Row>
            </Zoom>
        </Container>
    );
}

export default Info;
