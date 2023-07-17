import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import d from "./babies.module.css";

const Charts = () => {
  const [chart2, setChart2] = useState("");
  const ID = useParams();
  const tkn = useContext(vacBabyContext);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [head, setHead] = useState("");

  const detailsCharts1 = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}/generateReport`,
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
          setHeight(res.data.heightChartImage);
          setWeight(res.data.weightChartImage);
          setHead(res.data.headChartImage);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const detailsCharts2 = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}/generateLineChartReport`,
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
          setChart2(res.data.heightChartImage);
        } else {
          alert(res.data.Error);
        }
      });
  };

  useEffect(() => {
    detailsCharts1();
    detailsCharts2();
  }, [tkn.change]);

  return (
    <div
      className="container pt-4"
      style={{ backgroundColor: "#F5F7FD" }}
      id={d.cont}
    >
      <Container>
        <h1 style={{ color: "blue" }}>Reports for child</h1>
        <hr />
        {height !== "" && chart2 !== "" && weight !== "" && head !== "" ? (
          <><Row className="d-flex justify-content-center mb-5">
            <Col>
              <img src={height} alt="charts" className="w-100 img-responsive" />
            </Col>
            <Col>
              <img src={weight} alt="charts" className="w-100 img-responsive" />
            </Col>
            <Col>
              <img src={head} alt="charts" className="w-100 img-responsive" />
            </Col>
          </Row>
          <hr/>
          <Row>
             <Col lg={true} className="text-center"><img src={chart2} alt="charts"  className="w-75 h-75 img-responsive"
                /></Col>
          </Row></>
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" className="mx-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Charts;
