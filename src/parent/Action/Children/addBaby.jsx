import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Alert, Button } from "react-bootstrap";
import d from "./babies.module.css";
import AddBabyValidate from "./addBabyValidate";
import { vacBabyContext } from "../../../data/vacBabydata";
import axios from "axios";
import { useContext } from "react";
const AddBaby = () => {
  const userauth = useContext(vacBabyContext);
  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({
    name: "",
    birthDate: "",
    weight: "",
    headDiameter: "",
    gender: "",
    height: "",
  });
  const defultvalues=()=>
  {
    setVals({
      name: "",
      birthDate: "",
      weight: "",
      headDiameter: "",
      gender: "",
      height: "",
    })
  }
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var today = new Date();
  let mon =
      today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1,
    day = today.getDate() <= 9 ? "0" + (today.getDate() + 1) : today.getDate(),
    date = today.getFullYear() + "-" + mon + "-" + day,
    last = today.getFullYear() - 3 + "-" + mon + "-" + day;
    const validate = (e) => {
    e.preventDefault();
    const allVals=vals
    const d=vals.birthDate
    const rrr=vals.birthDate

    setErrors(AddBabyValidate(allVals));
    let xc = AddBabyValidate(allVals);

    if (xc.name === "") {
      const parts = d.split("-");
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    
    const formattedDate = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
    allVals.birthDate=formattedDate
      var json = JSON.stringify(allVals);
      allVals.birthDate=rrr
    vals.birthDate=rrr
      axios
        .post("https://infant-diary-backend.onrender.com/api/v1/child", json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setShow(false);
userauth.setChange(!userauth.change) 
defultvalues()     
} else {
            console.log(res.data.Error);
          }
        })
        .catch((err) => alert(err.response.data.message));
    }
  };
  return (
    <div className="mt-3 mb-3 text-center ">
      <Button
        variant="primary"
        onClick={handleShow}
        id={d.btn2}
        style={{ height: "2.5rem" }}
      >
        Add new Baby
      </Button>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                value={vals.name}
                placeholder="Enter Username"
                required
                onChange={handleInput}
                id={d.controlx}
                name="name"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Baby Name
              </Form.Label>
              {errors.name && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.name}
                </Alert>
              )}
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="date"
                placeholder="Due date"
                required
                id={d.controlx}
                value={vals.birthDate}
                onChange={handleInput}
                x="true"
                name="birthDate"
                min={last}
                max={date}
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Birth Data
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter weight in Gm"
                min={1000}
                required
                id={d.controlx}
                value={vals.weight}
                onChange={handleInput}
                name="weight"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                weight
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter head Diameter in cm"
                
                min={1}
                required
                id={d.controlx}
                value={vals.headDiameter}
                name="headDiameter"
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                head Diameter
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter height in cm"
                min={30}
                required
                id={d.controlx}
                name="height"
                value={vals.height}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Height
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              id={d.coll2}
            >
              <Form.Select
                id={d.controlx}
                aria-label="Default select example"
                value={vals.gender}
                name="gender"
                onChange={handleInput}
                required
              >
                
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="" disabled>
                  Select Gender
                </option>
              </Form.Select>
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Gender
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

export default AddBaby;
