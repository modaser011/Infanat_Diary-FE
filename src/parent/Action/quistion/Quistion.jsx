import {Container , Accordion,Col,Row,Form} from 'react-bootstrap';  
import d from "./Quistion.module.css";
import search from '../../../assets/search.svg'
import React, { useContext, useEffect, useState } from 'react';
import { vacBabyContext } from '../../../data/vacBabydata';
const Quistion = () => {
    const data1 = useContext(vacBabyContext);
  useEffect(() => {
    data1.quisdetails();
  }, []);
    return (
        <Container
        fluid
        id={d.cont}
        className="justify-content-center align-content-center"
      >
        <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
            <div className='d-None-none' id={d.diva}>
        <h1 style={{ color: "blue" }}>All Quistion</h1>
            <hr /></div>
          <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0">
            <div id={d.search}>
              <h6 className="text-start ms-3 mt-2">search for Quistion</h6>
              <hr />
              <Form.Control
                className="mx-auto mb-2"
                style={{
                  width: "95%",
                  height: "2.7rem",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </Col>
          <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
          <div className='d-None-none' id={d.diva2}>
        <h1 style={{ color: "blue" }}>All Quistion</h1>
            <hr /></div>
            {data1.qius.length >= 1 ? ( 
           data1.qius.map(({body,answer,age,virusName}, idx) =>
            <Accordion defaultActiveKey="0" key={idx}>
      <Accordion.Item eventKey="0">
        <Accordion.Header> 
        <div className='me-auto'>
        <p className='text-start'>Age: {age}</p>
        <p className='text-start'>Virus: {virusName}</p>
        <p className='text-start'>Quistion: {body}?</p>
        </div>
        </Accordion.Header>
        
        <Accordion.Body>
           <div>
            Answer:
            </div>  
          {answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>)):<></>}           
          </Col>
        </Row>
      </Container>
    );
}

export default Quistion;
