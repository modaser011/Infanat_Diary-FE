import React, { useContext, useEffect, useState } from "react";
import d from "../../../Admin/Action/standard/standard.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import serv from '../../../assets/servic.png'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const HospitalsServices = () => {
  const nav=useNavigate()
  const [keyword, setKeyword] = useState("");
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  const id1=ID.id
  useEffect(() => {
    tkn.HospitalById(id1);
  }, []);
  
  return (
    <div id={d.cont} className="justify-content-center align-content-center bg-white">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Services for Hospital</h1>
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for service</h6>
            <hr />
              <Form.Control
                className="mx-1 mb-2"
                style={{
                  width: "95%",
                  height: "2.7rem",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
                
          </div>
        </Col>

        <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
        {Object.keys(tkn.HospitalsIdDetails).length >= 1 ? (
          tkn.HospitalsIdDetails.services.length >= 1 ? (
            tkn.HospitalsIdDetails.services.map(({ name, _id,age}) => (
              <div
                className="post__container container bg-white mb-3"
                key={_id}
              > 
                <div className="post__right ">
                  <div
                    className="post__body d-flex"
                    style={{ overflowWrap: "anywhere" }}
                  > <div className="me-5 mt-3"><img src={serv} className="img-responsive" alt="" style={{width:'130px'}} /></div>
                    <div>
                    <h2 style={{fontWeight:'bold',color:'blue'}} className="mb-4">At the age of: {age}</h2>
                    <h4 style={{fontWeight:'bold'}}>Service name: {name}</h4>

                    </div>
                  </div>
                </div>
              </div>
            ))):  <Alert variant="warning" className="text-center"> There is no Services</Alert>):<> <div className="my-5 mx-auto text-center">
            <Spinner animation="border my-5" className="my-5 mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner></div></>}
        </Col>
      </Row>
    </div>
  );
};

export default HospitalsServices;
