import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Alert, Button } from "react-bootstrap";
import d from "./babies.module.css";
import AddBabyValidate from "./addBabyValidate";
import { vacBabyContext } from "../../data/vacBabydata";
import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const EditBaby = () => {
  const userauth = useContext(vacBabyContext);
  console.log("token : " + userauth.token);
  const ID = useParams();
  console.log(ID.id);

  const [details, setDetails] = useState({});
  const detailsVac = async () => {
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${userauth.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.document);
        } else {
          alert(res.data.Error);
        }
      });
  };
const [show, setShow] = useState(false);
  const [vals, setVals] = useState({
    name: d,
    birthDate:details.birthDate===undefined?'aa':details.birthDate.replaceAll('/','-'),
    weight: details.weight,
    headDiameter: details.headDiameter,
    gender: details.gender,
    height: details.height,
  });
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  var today = new Date();
  let mon =
      today.getMonth() + 1 <= 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1,
    day = today.getDate() <= 9 ? "0" + (today.getDate() + 1) : today.getDate(),
    date = today.getFullYear() + "-" + mon + "-" + day,
    last = today.getFullYear() - 3 + "-" + mon + "-" + day;
    useEffect(() => {
        detailsVac();
      }, [show]);
    const validate = (e) => {
    e.preventDefault();
    const allVals=vals      
    setErrors(AddBabyValidate(allVals));
    let xc = AddBabyValidate(allVals);
    if (xc.name === "") {
      var json = JSON.stringify(allVals);
      allVals.birthDate=allVals.birthDate.replaceAll('/','-')
      axios
        .put(`https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`, json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${userauth.token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setShow(false);
userauth.setChange(!userauth.change)      
} else {
            console.log(res.data.Error);
          }
        })
        .catch((err) => alert(err.response.data.message));
    }
  };
  const handleShow = () => {setShow(true)
    const birth=details.birthDate.replaceAll('/','-')
    setVals({
        name: details.name,
        birthDate:birth,
        weight: details.weight,
        headDiameter: details.headDiameter,
        gender: details.gender,
        height: details.height,
      });
};
  return (
    <div className="mb-3 text-center ">
      <Button
        variant="primary"
        onClick={handleShow}
        id={d.btn2}
        className=" mt-1 me-5"
        style={{ width: "8rem",height:'2.5rem'}}
      >
        Edit
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
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="" id={d.coll2}>
              <button
                className="mb-2 btn"
                variant="primary"
                type="submit"
                id={d.buttun}
              >
                update
              </button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditBaby
