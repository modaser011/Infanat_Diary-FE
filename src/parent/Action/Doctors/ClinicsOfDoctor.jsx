import React, { useEffect, useState } from "react";
import d from "../Announcements/announce.module.css";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import clinics1 from "../../../assets/clinic-icon.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClinicsOfDoctor = () => {
    const ID = useParams();
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
  useEffect(() => {
    detailsDoctor();
  }, []);
  
    return (
        <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Clincs of Doctor</h1>
        </div>
        <hr />
        <Col md={true} className="col-md-10 mx-0 mt-3 mt-md-0 mx-auto">
        {Object.keys(details).length >= 1 ? (
          details.clinics.length >= 1 ? (
            details.clinics.map(({ name, _id,address,phone,city,zip,state},idx) => (
              <div
                className="post__container container bg-white mb-3"
                key={_id}
              > 
                <div className="post__right ">
                  <div
                    className="post__body d-flex"
                    style={{ overflowWrap: "anywhere" }}
                  > <div className="me-5 mt-3"><img src={clinics1} className="img-responsive" alt="" style={{width:'130px'}} /></div>
                    <div>
                    <h2 style={{fontWeight:'bold',color:'blue'}} className="mb-4">name: {name}</h2>
                    <h4 style={{fontWeight:'bold'}}>Address: {address}</h4>
                    <h4 style={{fontWeight:'bold'}}>Phone: {phone}</h4>
                    <h4 style={{fontWeight:'bold'}}>City: {city}</h4>
                    <h4 style={{fontWeight:'bold'}}>Zip code: {zip}</h4>
                    <h4 style={{fontWeight:'bold'}}>state: {state}</h4>

                    </div>
                  </div>
                </div>
              </div>
            ))):  <Alert variant="warning" className="text-center"> There is no clinics</Alert>):<> <div className="my-5 mx-auto text-center">
            <Spinner animation="border my-5" className="my-5 mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner></div></>}
        </Col>
      </Row>
    </div>
  );
};

export default ClinicsOfDoctor;
