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
import EditBaby from "./EditBaby";
import { HashLink } from 'react-router-hash-link';
const BabyData = () => {  
  const nav=useNavigate()
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  console.log(ID.id);
  var today = new Date();
  let mon =
      today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1,
    day = today.getDate() <= 9 ? "0" + (today.getDate() + 1) : today.getDate(),
    date = today.getFullYear() + "-" + mon + "-" + day
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

  const[agecalc,setAgecalc]=useState([])
  const dateArr=(date.split('-'))
  const age=()=>{
    if(!Object.keys(details).length === 0){
      const dateArr2=details.birthData.split('/')
      const tempage=[]
      for (var i=0;i<3;i++)
      {
              tempage.append(Number(dateArr[i])-Number(dateArr2[i]))
      }
      setAgecalc(tempage)
  }
  }
  useEffect(() => {
    detailsVac();
    age();
  }, [tkn.change]);
  
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
              }, 0);
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
                   <HashLink to ='#contvac' smooth> <Button className="rounded-pill" style={{ width: "6rem" }}>
                      vaccines
                    </Button>
                    </HashLink>
                  </div>
                  <div className="item-price mb-3 ms-3"><h4>Age: {agecalc[0]} </h4></div>
                  <div className="item-title mb-3 ms-3">
                  <h4>weight: {details.weight} Gram</h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h4> height: {details.height} Centimeter </h4>
                  </div>
                  <div className="item-title mb-3 ms-3">
                  <h4>head Diameter: {details.headDiameter} Centimeter</h4>
                  </div>
                  <div className="item-title mb-3 ms-3"><h4> Gender: {details.gender}</h4> </div>
                </Card.Title>
              </Col>
              <div className="mx-auto d-flex justify-content-center">
                <Button
                  variant="danger"
                  className=" mt-1 me-5 mx-xs-auto"
                  style={{ width: "8rem",height:'2.5rem'}}
                  onClick={deleteChild}
                >
                  Delete
                </Button>
                <EditBaby/>
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
