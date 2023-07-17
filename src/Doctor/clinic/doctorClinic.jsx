import React, { useContext, useEffect } from "react";
import d from "./clinic.module.css";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../data/vacBabydata";
import delete1 from "../../assets/delete.png";
import clinics1 from "../../assets/clinic-icon.png";
import axios from "axios";
import AddClinic from "./AddClinic";
import EditClinic from "./EditClinic";
const DoctorClinic = () => {
  const data1 = useContext(vacBabyContext);
  useEffect(() => {
    data1.doctorinfo();
  }, [data1.doctorInfoChange]);
  
  const deleteclinic = async (id) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/clinic/${id}`,
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
          data1.setDoctorInfochange(!data1.doctorInfoChange);
          alert(res.data.message)
        } else {
          alert(res.data.Error);
        }
      });
  };
  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Clincs you have</h1>
          <AddClinic/>
        </div>
        <hr />
        <Col md={true} className="col-md-10 mx-0 mt-3 mt-md-0 mx-auto">
          {data1.clinicksDoctor.length >= 1 ? (
            data1.docinfo.clinics.map(({ name, _id,address,phone,city,zip,state},idx) => (
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
                <div className="d-block" style={{ marginTop: "-1rem" }}>
                    <img
                      src={delete1}
                      alt=""
                      style={{
                        height: "18px",
                        width: "18px",
                        cursor: "pointer",
                      }}
                      onClick={()=>deleteclinic(_id)}
                    />
                    <EditClinic details={data1.docinfo.clinics[idx]}/>
                  </div>
              </div>
            ))
          ) : (
            <></>
          )}
          {data1.clinicksDoctor.length === 0 && data1.doctorInfoLoud && (
            <div className="my-5 mx-auto text-center">
            <Spinner animation="border my-5" className="my-5 mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner></div>
          )}
          {data1.clinicksDoctor.length === 0 && !data1.doctorInfoLoud && (
            <Alert variant="warning"> There is no clinics</Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DoctorClinic;
