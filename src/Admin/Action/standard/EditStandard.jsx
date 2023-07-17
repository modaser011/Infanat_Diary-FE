import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import edit from "../../../assets/edit.png";
import d from "./standard.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
const EditStandard = ({weight, headDiameter, gender, height, age,_id}) => {
  const userauth = useContext(vacBabyContext);

  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({
    weight:weight,
    headDiameter:headDiameter,
    gender:gender,
    height:height,
    age:age,
  });
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validate = (e) => {
    e.preventDefault();
    var json = JSON.stringify(vals);
    axios
      .put(`https://infant-diary-backend.onrender.com/api/v1/standard/${_id}`, json, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setShow(false);
          userauth.setChangeStandards(!userauth.changeStandards);
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="mt-3 mb-3 text-center ">
       <img src={edit} alt="" className="mx-0 px-0 img-responsive"
                style={{ height: "18px", width: "18px",cursor:'pointer' }}  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
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
                placeholder="Enter age in month"
                min={1}
                required
                id={d.controlx}
                value={vals.age}
                onChange={handleInput}
                name="age"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Age
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
            <Form.Group className="mb-3" id={d.coll2}>
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
                Save
              </button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditStandard;
