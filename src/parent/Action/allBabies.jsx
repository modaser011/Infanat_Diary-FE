import React from 'react';
import d from "./allDoc.module.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import AddBaby from './addBaby';
const AllBabies = () => {
    return (
        <Container
        fluid
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
                  <h5 style={{ color: "blue" }}>Doctor: karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                </div>
              </Col>
            </Row>
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
                  <h5 style={{ color: "blue" }}>Doctor: karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                </div>
              </Col>
            </Row>{" "}
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
                  <h5 style={{ color: "blue" }}>Doctor: karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                  <h5>karim Benzema</h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default AllBabies;
