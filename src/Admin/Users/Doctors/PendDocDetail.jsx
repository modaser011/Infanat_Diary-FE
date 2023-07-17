import React from "react";
import { Button, Card, Container, Col, Row, Spinner } from "react-bootstrap";
import d from "../../../parent/Action/Children/babies.module.css";
import { useParams } from "react-router-dom";
import {useEffect} from "react";
import delete1 from "../../../assets/wdel.png";
import approval from "../../../assets/approve.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
const PendDoc = () => {  
  const ID = useParams(); 
  const id1=ID.id 
  const nav=useNavigate()
const[details,setDetails]=useState({})
  const approveHospital = async () => {
    await axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/admin/AcceptDoctor/${id1}`,
        {},
        {
          headers: {
            token: `${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message)
          nav('/admin')
        } 
      })
      .catch((error) => {
        alert(error);
      });
  };

  

  const getDoctor = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/admin/getuserByID/${id1}`,
        {
          headers: {
            token: `${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
setDetails(res.data.user)
        } 
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    getDoctor()
}, []);
  return (
    <div className="container justify-content-center align-item-center d-flex"
    id={d.cont2}>
       <Container className="py-3 pb-5">
        <Row>
          {Object.keys(details).length >= 1 ? (
            <>
              <Col md={4} className="img-item me-5">
                <Card.Img
                  className="img-item my-4 mx-md-3 me-5 img-responsive img-fluid"
                  src={details.verficationImage}
                  style={{ borderRadius: ".7rem" }}
                />
              </Col>
              <Col className="mt-5">
                <Card.Title className="justify-content-between">
                  <h1 className="item-title mb-3" style={{ color: "blue" }}>
                    {details.name}
                  </h1>
                  <div className="item-price mb-3 ms-3"><h3>Email: {details.email}</h3></div>
                  <div className="item-title mb-3 ms-3">
                  <h3>role: {details.role}</h3>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h3> Phone: {details.phone}  </h3>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h3>Age: {details.age} </h3>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h3>Gender: {details.gender} </h3>
                  </div>
                </Card.Title>
              </Col>
              <div className="mx-auto d-flex justify-content-center">
              <Button
                        variant="primary"
                        className=" mt-2 mx-3"
                        style={{ color: "white" }}
                     onClick={()=>approveHospital(id1)}
                     >
                        <img
                          src={approval}
                          alt=""
                          className="me-2"
                          style={{
                            height: "18px",
                            width: "18px",
                            cursor: "pointer",
                            marginTop: "-.2rem",
                          }}
                        />
                        approve
                      </Button>
                      <Button variant="danger" className=" mt-2 mx-3">
                        <img
                          src={delete1}
                          alt=""
                          className="me-2"
                          style={{
                            height: "18px",
                            width: "18px",
                            cursor: "pointer",
                            marginTop: "-.2rem",
                          }}
                        />
                        Remove
                      </Button>
              </div>
            </>
          ) : (
            <Spinner animation="border" className="mx-auto align-self-center" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container> 
    </div>
  );
};

export default PendDoc;
