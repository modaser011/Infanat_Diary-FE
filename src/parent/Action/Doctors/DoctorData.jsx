import React, { useEffect } from "react";
import { Button, Card, Container, Col, Row, Spinner, Form } from "react-bootstrap";
import d from "../../../parent/Action/Children/babies.module.css";
import photo from "../../../assets/babyy.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Rate from "./Rate";
import { Rating } from "@mui/material";
const DoctorData = () => {  
  const ID = useParams();
  const [changing,setChanging]=useState(false)
    
  const [details, setDetails] = useState({});
  const detailsDoctor = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/doctor/${ID.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.doctor);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const [rate, setRate] = useState({rating:0});

  useEffect(() => {
    detailsDoctor();
  }, [changing]);
  
  const handleInput = (e,x) => {
    setRate((prev) => ({ ...prev, [e.target.name]: x }));
  };

  const handleRate =(e) =>
  {
    e.preventDefault();
    var json = JSON.stringify(rate);
    console.log(json)
     axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/doctor/${ID.id}`,
        json,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setChanging(!changing)
          console.log("rodri")
        } 
      })
      .catch((err) => alert(err.response.data.message));
  };
  
    return (
    <div className="container bg-white" id={d.cont}>
      <Container className="py-3 pb-5">
        <Row>
          {Object.keys(details).length >= 1 ? (
            <>
              <Col lg={true} className="img-item me-5">
                <Card.Img
                  className="img-item my-4 mx-md-3 me-5 img-responsive img-fluid"
                  src={photo}
                  style={{ borderRadius: ".7rem" }}
                />
              </Col>
              <Col className="mt-4">
                <Card.Title className="justify-content-between">
                  <h1 className="item-title mb-3" style={{ color: "blue" }}>
                   Name: Doctor {details.name} 
                  </h1>
                  <div className="item-title mb-3 ms-3">
                  <h4 className="d-flex"> Rating: <Rate num={details.ratingAverage}/> </h4>
                  </div>
                  <div className="item-price mb-3 ms-3"><h4>Age: {details.age} years </h4></div>
                  <div className="item-title mb-3 ms-3">
                  <h4>Gender: {details.gender} </h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h4>Number of clinics : {details.clinics.length} </h4>
                  </div>
                </Card.Title>
              </Col>
              <div className="d-flex justify-content-center">
                <Form onSubmit={(handleRate)}>
                <Form.Group className="" id={d.coll2}>
              <h4>Rate this Doctor: </h4><Rating 
   style={{ pointerEvents: "auto"}}
        value={rate.rating}
        name='rating'
        size="large"
        onChange={(event, newValue) => {
            handleInput(event,newValue);
        }}/>
                      </Form.Group>
        <Form.Group>
        <Button type="submit" className="mx-auto d-flex justify-content-center" style={{width:'8rem'}}>Send Rate</Button>
              </Form.Group>
              </Form>
              </div>              

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

export default DoctorData;
