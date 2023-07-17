import React, { useContext, useEffect, useState } from "react";
import d from "../../../Admin/Action/standard/standard.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import Hosp from '../../../assets/hospital.avif'
import { useNavigate } from "react-router-dom";
const HospitalsDetails = () => {
  const nav=useNavigate()
  const data1 = useContext(vacBabyContext);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.hospitalSearch(keyword);
  }, [data1.changehospital,keyword]);
  
  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Standard</h1>
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for Hospital</h6>
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
          {data1.hospital.length >= 1 ? (
            data1.hospital.map(
              ({ name, _id, address, phone}) => (
                <div
                  className="post__container container mb-3"
                  key={_id}
                  style={{cursor:'pointer'}}
                  onClick={()=>nav(`/hospital/${_id}`)}
                >
                  <div className="post__right ">
                    <div
                      className="post__body d-flex"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <div className="me-md-4 me-2">
                        <img
                          src={Hosp}
                          className="img-responsive ms-3"
                          alt=""
                          style={{ width: "130px"
                        ,marginTop:'-1rem' }}
                        />
                      </div>
                      <div>
                        <h2
                          style={{ fontWeight: "bold", color: "blue" }}
                          className="mb-4"
                        >
                          Name: {name}
                        </h2>
                        <h4 style={{ fontWeight: "bold" }}>
                        phone: {phone}
                        </h4>
                        <h4 style={{ fontWeight: "bold" }}>
                        address: {address}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <></>
          )}
          {data1.hospital.length === 0 && data1.loudHosp && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {data1.hospital.length === 0 && !data1.loudHosp && (
            <Alert variant="warning"> There is no hospital </Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HospitalsDetails;
