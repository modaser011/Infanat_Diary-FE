import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {Alert, Button } from "react-bootstrap";
import d from "./service.module.css";
import axios from "axios";
import { vacBabyContext } from "../../data/vacBabydata";
import { useContext } from "react";
import SerValidate from "./serviceValidate";
const AddService = () => {
    const userauth = useContext(vacBabyContext);

  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({ name: "", age: "" });
  const [errors,setErrors]=useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validate = (e) => {
    e.preventDefault();
    setErrors(SerValidate(vals));
    let xc = SerValidate(vals);

    if ( xc.name === "") 
{
    var json = JSON.stringify(vals);
    axios
      .post(
        "https://infant-diary-backend.onrender.com/api/v1/service",
        json,
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
          setShow(false);
          userauth.setChangingHospValues(!userauth.changingHospValues);
        } 
      })
      .catch((err) => alert(err.response.data.message));
  };
  }
  return (
    <div className="mt-3 mb-3 text-center ">
      <Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new Service
      </Button>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter name of service"
                required
                onChange={handleInput}
                id={d.controlx}
                value={vals.name}
                x="true"
                name="name"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Name
              </Form.Label>
              {errors.name && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.name}
                </Alert>)}
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter Age in month"
                name="age"
                value={vals.age}
                min={1}
                max={36}
                required
                id={d.controlx}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Age
              </Form.Label>
            </Form.Group>

            <Form.Group className="" id={d.coll2}>
              <button
                className="mb-2 btn"
                variant="primary"
                type="submit"
                id={d.buttun}
              >
                Add
              </button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddService;
