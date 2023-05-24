import React from 'react';
import { Button, Card, Container,Col, Row } from 'react-bootstrap';
import d from './babies.module.css'
const BabyData = () => {
    return (
        <div className='container'id={d.cont}>
            <Container className='py-5 pb-5'>
             <Row>
                               <Col lg={true} className="img-item me-5"> <Card.Img className="img-item my-4 mx-md-3 me-5 img-responsive img-fluid" src='babyy.jpg' style={{borderRadius:'.7rem'}} />
                                </Col>
                               <Col className='mt-4'> 
                                    <Card.Title className="justify-content-between">
                                        <h1 className="item-title mb-3" style={{color:'blue'}}>Ahmed sameh</h1>
                                        <div className="item-title mb-3 d-flex"><Button className='mx-1 me-3 rounded-pill' style={{width:'6rem'}}>charts</Button><Button className='rounded-pill'style={{width:'6rem'}}>vaccines</Button></div>
                                        <div className="item-price mb-3 ms-3" > Age: 10 months </div>
                                        <div className="item-title mb-3 ms-3"> weight: 1500 gram </div>
                                        <div className="item-title mb-3 ms-3"> height: 60 Centimeter </div>
                                        <div className="item-title mb-3 ms-3"> head Diameter: 3 Centimeter </div>
                                        <div className="item-title mb-3 ms-3"> Gender: Male </div>

                                    </Card.Title>
                                    
                                </Col>
                            </Row>
                            
       </Container> 
       </div>
    );
}

export default BabyData;
