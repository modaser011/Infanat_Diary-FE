import standard from "../../../assets/certificate-medal-quality-icon.png";
import delete1 from "../../../assets/delete.png";
import React, { useContext, useEffect, useState } from "react";
import d from "./standard.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import axios from "axios";
import AddStandard from "./AddStandard";
import EditStandard from "./EditStandard";
const Standard = () => {
  const data1 = useContext(vacBabyContext);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.standardSearch(keyword);
  }, [data1.changeStandards,keyword]);

  const deleteannounce = async (id) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/standard/${id}`,
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
          data1.setChangeStandards(!data1.changeStandards);
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Standard</h1>
          <AddStandard />
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for standard</h6>
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
          {data1.standards.length >= 1 ? (
            data1.standards.map(
              ({ gender, _id, height, weight, headDiameter, age }) => (
                <div
                  className="post__container container bg-white mb-3"
                  key={_id}
                >
                  <div className="post__right ">
                    <Row
                      className="d-flex"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <Col xs={3} md={3} lg={2} className="me-2">
                        <img
                          src={standard}
                          className="img-responsive ms-3 w-100 "
                          alt=""
                          style={{ width: "110px" }}
                        />
                      </Col>
                      <Col className=" col ms-4">
                        <h2
                          style={{ fontWeight: "bold", color: "blue" }}
                          className="mb-4"
                        >
                          Gender: {gender}
                        </h2>
                        <h4 style={{ fontWeight: "bold" }}>
                          Height: {height} CM
                        </h4>
                        <h4 style={{ fontWeight: "bold" }}>
                          HeadDiameter: {headDiameter} Cm
                        </h4>
                        <h4 style={{ fontWeight: "bold" }}>
                          Weight: {weight} Gm
                        </h4>
                        <h4 style={{ fontWeight: "bold" }}>
                          Age: {age} months
                        </h4>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-block" style={{ marginTop: "-1rem" }}>
                    <img
                      src={delete1}
                      alt=""
                      style={{
                        height: "18px",
                        width: "18px",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteannounce(_id)}
                    />
                    <EditStandard
                      gender={gender}
                      height={height}
                      headDiameter={headDiameter}
                      weight={weight}
                      age={age}
                      _id={_id}
                    />
                  </div>
                </div>
              )
            )
          ) : (
            <></>
          )}
          {data1.standards.length === 0 && data1.standardsLoud && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {data1.standards.length === 0 && !data1.standardsLoud && (
            <Alert variant="warning"> There is no Standards </Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Standard;
