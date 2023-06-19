import React, { useContext, useEffect } from 'react';
import d from "./allchild.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import AddBaby from './addBaby';
import { vacBabyContext } from '../../../data/vacBabydata';
import { Link } from 'react-router-dom';

const AllBabies = () => {
  const { babies, loud, x, setX, Detailschild,change} = useContext(vacBabyContext);

  useEffect(() => {
    setTimeout(() => {
      setX(true);
    }, 1000);
    Detailschild();
  }, [change]);

    return (
        <div
        id={d.cont}
        className="justify-content-center align-content-center"
      >
        <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className='d-flex justify-content-between align-items-center'>
            <h1 style={{ color: "blue" }}>All babies</h1>
        <AddBaby/>
        </div>
            <hr />
          <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0">
            <div id={d.search}>
              <h6 className="text-start ms-3 mt-2">search for baby</h6>
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
          {babies.length >= 1 ? ( 
           babies.map(({ name,gender,headDiameter,height,weight,_id }, idx) => (
            <Link to={`/babyPage/${_id}`} style={{textDecoration:'none',color:'black'}} key={idx}>
          <Row className="d-flex mb-4" id={d.colm2}>
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
                  <h3 style={{ color: "blue" }} className='mb-3'>{name}</h3>
                  <h5 className='mb-2'>Gender: {gender}</h5>
                  <h5 className='mb-2'>height: {height} Centimeter</h5>
                  <h5 className='mb-2'>weight: {weight} gram </h5>
                  <h5 className='mb-2'>headDiameter: {headDiameter} Centimeter</h5>
                  <h5 className='mb-2'>age: 30 months</h5>
                </div>
              </Col>
            </Row></Link>))):<></>}
            {babies.length === 0 && loud && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
            )
}
{babies.length === 0 && !loud && x && (
         <Alert variant='warning'> You don't have any babies</Alert>
)}
          </Col>
        </Row>
      </div>
    );
}

export default AllBabies;
