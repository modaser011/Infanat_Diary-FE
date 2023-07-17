import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import d from "./forget.module.css";
import { Form, Col, Row, Alert, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ValidatePass from "./validatepass";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Forget() {
   const nav = useNavigate();

   const [vals, setVals] = useState({
      newPassword: "",
      email: "",
      confirmpassword: "",
      code:null,
    });
    const handleInput = (e) => {
      setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
  const [error, setErrors] = useState("");
    const validate = (e) => {
      e.preventDefault();
      setErrors(ValidatePass(vals));
      let xc = ValidatePass(vals);
      if (xc.newPassword === "" && xc.confirmpassword === "") {
        var json = JSON.stringify(vals);
        console.log(json);
        axios
          .put(
            "https://infant-diary-backend.onrender.com/api/v1/restPassword",
            json,
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            if (res.status === 200) {
              nav("/login");
            } 
          })
          .catch((err) => alert(err.response.data.message));
      }
    };
  return (
    <Container
      id={d.cont}
      className="justify-content-center align-content-center justify-content-center me-5 mt-sm-5 mt-xs-5 justify-content-center align-item-center text-center d-flex"
    >
      <Row className=" justify-content-center container">
        <Col id={d.coll} className="col-md-7 pt-md-5 my-auto mx-auto">
          <div className="justify-content-center mb-5 text-center">
            <img
              src="Password.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
            <br />
            <h3>Set New Password</h3>
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

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter Code"
                required
                id={d.controlx}
                value={vals.code}
                onChange={handleInput}
                name="code"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Code
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" id={d.coll2}>
              <Form.Control
                type="password"
                placeholder="Enter New Password"
                required
                value={vals.newPassword}
                onChange={handleInput}
                id={d.controlx}
                x="true"
                name='newPassword'
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                New Password
              </Form.Label>
              {error.password && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {error.password}
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3" id={d.coll2}>
              
            </Form.Group>
            <Form.Group className="mb-3" id={d.coll2}>
              <Form.Control
                type="password"
                placeholder="confirm New Password"
                required
                value={vals.confirmpassword}
                x="true"
                onChange={handleInput}
                id={d.controlx}
                name='confirmpassword'
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Confirm Password
              </Form.Label>
              {error.confirmpassword && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {error.confirmpassword}
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3" id={d.coll2}>
              <button
                className="mb-3 btn btn-primary"
                variant="primary"
                type="submit"
                id={d.buttun}
              >
                Reset Password
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
    </Container>
  );
}
