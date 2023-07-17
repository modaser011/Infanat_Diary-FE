import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import d from "./forget.module.css";
import { Form, Col, Row} from "react-bootstrap";
import mail from '../../assets/mail.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function ForgetConfirmMail() {
    const nav = useNavigate();
 const [vals,setVals]=useState({email:''})
 const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const validate = async (e) => {
    e.preventDefault();
    var json = JSON.stringify(vals);
    const data = await axios
      .post(
        `https://infant-diary-backend.onrender.com/api/v1/sendCode`,
        json,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.status === 200) {
            alert(res.data.message)
          nav(`/forget`);
        } 
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <div
      id={d.cont}
      className="justify-content-center align-content-center justify-content-center mt-sm-5 mt-xs-5 justify-content-center align-item-center text-center d-flex"
    >
      <Row className=" justify-content-center container">
        <Col className="col-md-7 my-auto mx-auto">
          <div className="justify-content-center mb-5 text-center">
            <img
              src={mail}
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
            <br />
            <h3>Confirm your Email</h3>
          </div>
          <Form className="text-center" id={d.formx} onSubmit={validate}>
            <Form.Group className="" id={d.coll2}>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                required
                value={vals.email}
                onChange={handleInput}
                id={d.controlx}
                name='email'
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Email
              </Form.Label>
            </Form.Group>
            <Form.Group className="" id={d.coll2}>
              <button
                className="mb-3 btn btn-primary"
                variant="primary"
                type="submit"
                id={d.buttun}
              >
                Send Email
              </button>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center mb-5 text-center">
            <Link to="/login">
              <img
                src="back-button.png"
                style={{ width: "30px", height: "30px" }}
                alt=""
                className="me-3"
              />
            </Link>
            <br />
            <Link to="/login" id={d.p}>
              <h3>Back to Login </h3>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
