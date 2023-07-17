import React, { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Spinner,
  Form,
} from "react-bootstrap";
import d from "./babies.module.css";
import photo1 from "../../../assets/babyy.jpg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditBaby from "./EditBaby";
import { HashLink } from "react-router-hash-link";
const BabyData = () => {
  const nav = useNavigate();
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  const [age1, setage] = useState("");

  const [photo, setphoto] = useState({ childPic: null });

  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("childPic", photo.childPic);
    axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          tkn.setChange(!tkn.change);
          console.log(res)
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  const [details, setDetails] = useState({});
  const detailsbabies = async () => {
    await axios
      .get(`https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.document);
          setage(res.data.AgeInMonths);
        } else {
          alert(res.data.Error);
        }
      });
  };

  useEffect(() => {
    detailsbabies();
  }, [tkn.change]);

  const deleteChild = async () => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          tkn.setChange(!tkn.change);
          nav("/allBabies");
        } else {
          alert(res.data.Error);
        }
      });
  };
  console.log(details);
  return (
    <div className="container" id={d.cont}>
      <Container className="py-3 pb-5">
        <Row>
          {Object.keys(details).length >= 1 ? (
            <>
              <Col lg={true} className="img-item me-5">
                <Card.Img
                  className="img-item my-4 mx-md-3 me-5 img-responsive img-fluid"
                  src={photo.childPic !== null ? photo.childPic : photo1}
                  style={{ borderRadius: ".7rem" }}
                />
                <Form className="text-center ms-5  d-flex" onSubmit={validate}>
                  <Form.Group className="mb-3 me-1" id={d.coll5}>
                    <Form.Label> Update child picture</Form.Label>
                    <Form.Control
                      type="file"
                      size="lg"
                      id={d.file}
                      required
                      x="true"
                      style={{
                        textAlign: "start",
                        height: "1rem",
                        width: "6.4rem",
                        paddingLeft: "-.4rem",
                      }}
                      onChange={(e) =>
                        setphoto({ childPic: e.target.files[0] })
                      }
                    />
                  </Form.Group>
                  {photo.childPic !== null && (
                    <Form.Group>
                      <Button
                        className=" btn"
                        variant="primary"
                        type="submit"
                        style={{ marginTop: "2.2rem", marginLeft: "-2rem" }}
                      >
                        Uploud
                      </Button>
                    </Form.Group>
                  )}
                </Form>
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
                    <HashLink to="#contvac" smooth>
                      {" "}
                      <Button
                        className="rounded-pill"
                        style={{ width: "6rem" }}
                      >
                        vaccines
                      </Button>
                    </HashLink>
                  </div>
                  <div className="item-price mb-3 ms-3">
                    <h4>
                      Age: {age1} {age1 > 1 ? "months" : "month"}{" "}
                    </h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                    <h4>weight: {details.measurements[0].weight} Gram</h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                    <h4>
                      {" "}
                      height: {details.measurements[0].height} Centimeter{" "}
                    </h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                    <h4>
                      head Diameter: {details.measurements[0].headDiameter}{" "}
                      Centimeter
                    </h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                    <h4> Gender: {details.gender}</h4>{" "}
                  </div>
                </Card.Title>
              </Col>
              <div className="mx-auto ms-5 d-flex justify-content-center">
                <Button
                  variant="danger"
                  className=" mt-1 me-5 mx-xs-auto"
                  style={{ width: "8rem", height: "2.5rem" }}
                  onClick={deleteChild}
                >
                  Delete
                </Button>
                <EditBaby details={details} />
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

export default BabyData;
