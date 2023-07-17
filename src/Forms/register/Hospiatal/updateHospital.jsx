import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import d from "../sign.module.css";
import { Form, Col, Row, Alert, Container, Spinner } from "react-bootstrap";
import InputMask from "react-input-mask";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import HospUpdatetValidate from "./hospUpdaateValidate";
export function UpdateHospitalProfile() {
  const nav = useNavigate();

  const {detailshos2, details } =
    useContext(vacBabyContext);
   
    useEffect(() => {
        detailshos2();
      }, []); 

  const [vals, setVals] = useState({
    name: details.name,
    email: details.email,
    phone: details.phone,
    address: details.address,
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    setVals({
      name: details.name,
      email: details.email,
      phone: details.phone,
      address: details.address,
      password: "",
      confirmpassword: "",
    });
  }, [details]);

  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errors, setErrors] = useState({});

  const validate = (e) => {
    e.preventDefault();
    setErrors(HospUpdatetValidate(vals));
    let xc = HospUpdatetValidate(vals);
    if (vals.password === "" && vals.confirmpassword === "") {
      if (xc.name===""&&xc.address==="") {
        let values={}
        values.name=vals.name
        values.email=vals.email
        values.phone= vals.phone
        values.address= vals.address

        var json = JSON.stringify(values)

        axios
          .put(
            "https://infant-diary-backend.onrender.com/api/v1/hospital",json,
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
              nav("/hospital");
              alert(res.data.message)
            }
          })
          .catch((err) => alert(err.response.data.message));
      }
    }

    if (vals.password !== "" || vals.confirmpassword !== "") {
      console.log("beeeeb")
      if (xc.name==="" &&xc.address==="" && xc.password === "" && xc.confirmpassword === "") {
        let values={}
        values.name=vals.name
        values.email=vals.email
        values.phone= vals.phone
        values.password= vals.password
        values.confirmpassword= vals.confirmpassword
        values.address=vals.address
        var json = JSON.stringify(values)
        axios
          .put(
            "https://infant-diary-backend.onrender.com/api/v1/hospital",
            json,
            {
              headers: { "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: `${localStorage.getItem("token")}`, },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              nav("/hospital");
              alert(res.data.message);
            }
          })
          .catch((err) => alert(err.response.data.message));
      }
    }
  };
  return (
    <Container
      id={d.cont}
      className="justify-content-center align-content-center justify-content-center me-5 mt-sm-5 mt-xs-5 justify-content-center align-item-center text-center d-flex"
    >
      {Object.keys(details).length >= 1 ? (
        <Row className="pb-5 container py-auto my-auto ">
          <Col className="col-md-5 my-auto ms-auto text-center text-center px-0">
            <h1>Your Profile</h1>
            <img src="Logo ()(1).png" className="mb-3 img-fluid" alt="" />
          </Col>

          <Col lg={true} id={d.coll} className="col-md-7 my-auto mx-auto px-0">
            <Form className="text-center mx-3 " onSubmit={validate}>
              <Form.Group className="mb-2" id={d.coll0}>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  required
                  onChange={handleInput}
                  id={d.name}
                  value={vals.name}
                  x="true"
                  name="name"
                />
                <Form.Label
                  id={d.label0}
                  class="form-control-placeholder transition"
                >
                  Full Name
                </Form.Label>
                {errors.name && (
                  <Alert key="danger" variant="danger" id={d.v}>
                    {errors.name}
                  </Alert>
                )}
              </Form.Group>

              <Form.Group className="mb-2" id={d.coll0}>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  required
                  onChange={handleInput}
                  id={d.name}
                  value={vals.address}
                  x="true"
                  name="address"
                />
                <Form.Label
                  id={d.label0}
                  class="form-control-placeholder transition"
                >
                  Address
                </Form.Label>
                {errors.address && (
                  <Alert key="danger" variant="danger" id={d.v}>
                    {errors.address}
                  </Alert>
                )}
              </Form.Group>


              <Form.Group class
              Name="mb-2" id={d.coll1}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleInput}
                  required
                  id={d.email}
                  x="true"
                  name="email"
                  value={vals.email}
                  disabled
                />
                <Form.Label
                  id={d.label1}
                  class="form-control-placeholder transition"
                >
                  Email address
                </Form.Label>
              </Form.Group>
              <Form.Group className="mb-2" id={d.coll2}>
                <InputMask
                  id={d.phone}
                  x="true"
                  className="number"
                  name="phone"
                  value={vals.phone}
                  onChange={handleInput}
                  mask="+20\(999) 999-999"
                  maskChar=" "
                  required
                  placeholder="Phone number"
                />
                <Form.Label
                  id={d.label2}
                  class="form-control-placeholder transition"
                >
                  Phone
                </Form.Label>
              </Form.Group>

              <Form.Group className="mb-2" id={d.coll3}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleInput}
                  id={d.password}
                  x="true"
                  value={vals.password}
                  name="password"
                />
                <Form.Label
                  id={d.label3}
                  class="form-control-placeholder transition"
                >
                  New Password
                </Form.Label>
                {errors.password &&vals.password!=='' &&(
                  <Alert key="danger" variant="danger" id={d.v}>
                    {errors.password}
                  </Alert>
                )}
              </Form.Group>

              <Form.Group className="mb-2" id={d.coll4}>
                <Form.Control
                  type="password"
                  placeholder="confirm Password"
                  value={vals.confirmpassword}
                  name="confirmpassword"
                  x="true"
                  onChange={handleInput}
                  id={d.confirm}
                />
                <Form.Label
                  id={d.label4}
                  class="form-control-placeholder transition"
                >
                  Confirm new Password
                </Form.Label>
                {errors.confirmpassword && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.confirmpassword}
                </Alert>
              )}
              </Form.Group>
              <Form.Group className="" id={d.coll2}>
                <button
                  className="mb-2 btn"
                  variant="primary"
                  type="submit"
                  id={d.buttun}
                >
                  Update Profile
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      ) : (
        <Spinner
        animation="border my-5"
        className="my-5 mx-auto"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )}
    </Container>
  );
}