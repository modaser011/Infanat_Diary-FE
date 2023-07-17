import React from 'react';
import { useState } from 'react';
import { vacBabyContext } from "../../data/vacBabydata";
import { useContext } from "react";
import axios from 'axios';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import d from "./Users.module.css";

const Charts = () => {
    const[chart1,setChart1]=useState('')
    const tkn = useContext(vacBabyContext);
    const detailsCharts1 = async () => {
      await axios
        .get(
          `https://infant-diary-backend.onrender.com/api/v1/admin/usersReport`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token:`${localStorage.getItem('token')}`
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setChart1(res.data.chartImage);
          } else {
            alert(res.data.Error);
          }
        });
    };
    useEffect(() => {
        detailsCharts1();
    }, [tkn.change]);
    return (
        <div className='container py-4 pb-5 min-vw-100' style={{backgroundColor:'#F5F7FD'}} id={d.cont}>
            <Container>
        <h1 style={{color:'blue'}}>
          Reports about users
        </h1>
        <hr/>
            {(chart1!=='')? (
            <Row className='d-flex justify-content-center' >
                <Col className='d-flex justify-content-center'><img src={chart1} alt="charts"  className="mx-0 px-0 img-responsive"
                  style={{height: "300px", width: "400px"}} /></Col>
            </Row>
            ) : (
            <Spinner animation="border" role="status" className="mx-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Container>
        </div>
    );
}

export default Charts;
