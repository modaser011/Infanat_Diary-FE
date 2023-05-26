import React, { useEffect } from "react";
import { Button, Card, Container, Col, Row, Spinner } from "react-bootstrap";
import d from "./babies.module.css";
import photo from "../../assets/babyy.jpg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { vacBabyContext } from "../../data/vacBabydata";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const BabyData = () => {  
  const nav=useNavigate()
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  console.log(ID.id);
  const [details1, setDetails1] = useState({})
  const [details, setDetails] = useState({});
  const detailsVac = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${tkn.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.document);
        } else {
          alert(res.data.Error);
        }
      });
  };
  useEffect(() => {
    detailsVac(details);
  }, []);
  console.log(details);
  const deleteChild = async () => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${tkn.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
            setTimeout(() => {
                tkn.setChange(!tkn.change)
                nav('/allBabies');
              }, 3000);
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    <div className="container" id={d.cont}>
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
                    {details.name}
                  </h1>
                  <div className="item-title mb-3 d-flex">
                    <Button
                      className="mx-1 me-3 rounded-pill"
                      style={{ width: "6rem" }}
                    >
                      charts
                    </Button>
                    <Button className="rounded-pill" style={{ width: "6rem" }}>
                      vaccines
                    </Button>
                  </div>
                  <div className="item-price mb-3 ms-3"> Age: {details.age} </div>
                  <div className="item-title mb-3 ms-3">
                    {" "}
                    weight: {details.weight} Gram{" "}
                  </div>
                  <div className="item-title mb-3 ms-3">
                    height: {details.height} Centimeter
                  </div>
                  <div className="item-title mb-3 ms-3">
                    head Diameter: {details.headDiameter} Centimeter
                  </div>
                  <div className="item-title mb-3 ms-3"> Gender: {details.gender} </div>
                </Card.Title>
              </Col>
              <div className="mx-auto d-flex justify-content-center">
                <Button
                  variant="danger"
                  className=" mt-1 me-5"
                  style={{ width: "6rem" }}
                  onClick={deleteChild}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  className=" mt-1 ms-5"
                  style={{ width: "6rem" }}
                >
                  Edit
                </Button>
              </div>
            </>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BabyData;
