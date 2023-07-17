import React, { useEffect } from "react";
import { Button, Card, Container, Col, Row, Spinner } from "react-bootstrap";
import d from '../Children/babies.module.css';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import { HashLink } from 'react-router-hash-link';
import Hosp from '../../../assets/iconhosp.jpg'
const HospValues = () => {  
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  const id1=ID.id
  useEffect(() => {
    tkn.HospitalById(id1);
  }, []);
  return (
    <div className="container" id={d.cont2}>
      <Container className="py-3 pb-5">
        <Row>
          {Object.keys(tkn.HospitalsIdDetails).length >= 1 ? (
            <>
              <Col lg={true} className="img-item me-5">
                <Card.Img
                  className="img-item my-4 mx-md-3 me-5 img-responsive"
                  src={Hosp}
                  style={{ borderRadius: ".7rem" }}
                />
              </Col>
              <Col className="mt-4">
                <Card.Title className="justify-content-between">
                  <h1 className="item-title mb-3" style={{ color: "blue" }}>
                    {tkn.HospitalsIdDetails.name}
                  </h1>
                  <div className="item-title mb-3 d-flex">
                    <Button
                      className="mx-1 me-3 rounded-pill"
                      style={{ width: "6rem" }}
                    >
                      Services
                    </Button>
                   <HashLink to ='#contvac' smooth> <Button className="rounded-pill" style={{ width: "6rem" }}>
                      vaccines
                    </Button>
                    </HashLink>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h4>address: {tkn.HospitalsIdDetails.address}</h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h4> phone: {tkn.HospitalsIdDetails.phone} </h4>
                  </div>            
                </Card.Title>
              </Col>
            </>
          ) : (
            <Spinner animation="border" role="status" className="mx-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HospValues;
