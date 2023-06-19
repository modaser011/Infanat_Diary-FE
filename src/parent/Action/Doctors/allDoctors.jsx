import d from "./allDoc.module.css";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import React, { useContext, useEffect, useState } from 'react';
import { vacBabyContext } from '../../../data/vacBabydata';
import search from '../../../assets/search.svg'
import axios from "axios";

const AllDoctors = () => {
  const data1 = useContext(vacBabyContext);
  useEffect(() => {
    data1.doctorDetails();
  }, []);
  const[keyword,setKeyword]=useState("");
  console.log(keyword)
  return (
    <Container
      fluid
      id={d.cont}
      className="justify-content-center align-content-center"
    >
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
      <h1 style={{ color: "blue" }}>All Doctors</h1>
          <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0">
          <div id={d.search}>
            <h6 className="text-start ms-3 mt-2">search for doctor</h6>
            <hr />
            <Form className="d-flex" onSubmit={(e)=>data1.searchDoc(e,keyword)}>
            <Form.Control
              className="mx-1 mb-2"
              style={{
                width: "95%",
                height: "2.7rem",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            />  
            <Form.Group>
            <button type="submit" className="bg-white me-1" style={{border:'none'}}><img className='img-responsive'src={search}  style={{ height: "20px", width: "20px",marginTop:'0rem' }}
            alt="" /></button>
            </Form.Group>
            
            </Form>
          </div>
        </Col>
        <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
        {data1.docDetail.length >= 1 ? ( 
           data1.docDetail.map(({ name,age,gender}, idx) =>
          <Row className="d-flex mb-4" id={d.colm2} key={idx}>
            <Col
              className="col-3 align-self-center me-4 ms-md-4"
              style={{ height: "120px", width: "120px", marginTop: "-2rem" }}
            >
              <img
                src="babyy.jpg"
                alt=""
                className="mx-0 px-0  rounded-pill img-responsive"
                style={{ height: "110px", width: "110px" }}
              />
            </Col>
            <Col className=" col-7 mt-3 mb-2 ms-md-2">
              <div>
                <h2 style={{ color: "blue" }} className='mb-3'>Doctor: {name}</h2>
                <h4 className='mb-2'>Gender: {gender}</h4>
                <h4 className='mb-2'>Address: </h4>
                <h4 className='mb-2'>Age: {age} </h4>
              </div>
            </Col>
          </Row>
            )):<></>} 
            {data1.docDetail.length === 0 && data1.loudDoc && (
          <Spinner className="my-5" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
            )
}
        {data1.docDetail.length === 0 && !data1.loudDoc &&(
          <p className="align-self-center">
            <Alert variant='warning'>There is no Doctors till now</Alert>
          </p>
        )}
        </Col>
      </Row>
    </Container>
    
  );
};

export default AllDoctors;
