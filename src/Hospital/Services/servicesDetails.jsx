import React, { useContext, useEffect, useState } from "react";
import d from "../../Admin/Action/standard/standard.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../data/vacBabydata";
import serv from '../../assets/serv.jpg'
import AddService from "./AddService";
import delete1 from "../../assets/delete.png";
import EditService from "./EditService";
import axios from "axios";
const HospitalsServicesDetails = () => {
  const [keyword, setKeyword] = useState("");
  const tkn = useContext(vacBabyContext);
  useEffect(() => {
    tkn.detailshos2();
  }, [tkn.changingHospValues]);    

  const deleteService = async (id) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/service/${id}`,
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
          tkn.setChangingHospValues(!tkn.changingHospValues);
          alert(res.data.message)
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    <div id={d.cont} className="justify-content-center align-content-center bg-white">
       <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Services for Hospital</h1>
          <AddService/>
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
        {Object.keys(tkn.details).length >= 1 ? (
            tkn.details.services.map(
              ({ name, _id, age}) => (
                <div
                  className="post__container container mb-3"
                  key={_id}
                >
                  <div className="post__right ">
                    <div
                      className="post__body d-flex"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <div className="me-md-4 me-2">
                        <img
                          src={serv}
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
                          at the age of: {age} months
                        </h2>
                        <h4 style={{ fontWeight: "bold" }}>
                        name: {name}
                        </h4>
                      </div>
                    </div>
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
                      onClick={() => deleteService(_id)}
                    />
                    <EditService
                      _id={_id}
                      name={name}
                      age={age}
                    />
                  </div>
                </div>
              )
            )
          ) : (<></>
          )}
          {Object.keys(tkn.details).length >= 1 && (
          tkn.details.services.length === 0 && tkn.loudingHospValues && (
          <Spinner animation="border" role="status" className="mx-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ))}
{Object.keys(tkn.details).length >= 1 && (
tkn.details.services.length === 0 && !tkn.loudingHospValues &&(
          <p className="align-self-center">
             <Alert variant='warning'>There is no services in this hospital</Alert>  
          </p>
        ))}

        </Col>
      </Row> 
    </div>
  );
};

export default HospitalsServicesDetails;
