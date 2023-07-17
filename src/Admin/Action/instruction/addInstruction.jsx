import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import d from "./instru.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
const AddInstruction = () => {
  const userauth = useContext(vacBabyContext);

  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({
    topic: "",
    body: "",
    type: "instruction",
    link: "",
    age:"",
    videoLink:""
  });
  const setdefault=()=>
  {
    setVals( { 
    topic: "",
    body: "",
    link: "",
    age:"",
    videoLink:""})
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validate = (e) => {
    e.preventDefault();
    var json = JSON.stringify(vals);
    axios
      .post(
        "https://infant-diary-backend.onrender.com/api/v1/information",
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
            setdefault()
          setShow(false);
          userauth.setChangeInfo(!userauth.changeInfo);
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="mt-3 mb-3 text-center ">
      <Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new Instruction
      </Button>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>

          <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter topic"
                required
                onChange={handleInput}
                id={d.controlx}
                value={vals.topic}
                x="true"
                name="topic"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Topic
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

            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter Link if founded"
                onChange={handleInput}
                id={d.controlx}
                value={vals.link}
                x="true"
                name="link"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Link
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter video Link if founded"
                onChange={handleInput}
                id={d.controlx}
                value={vals.videoLink}
                x="true"
                name="videoLink"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Video Link
              </Form.Label>
            </Form.Group>

           <Form.Group className="mb-3" id={d.coll2}>
              <Form.Control
                as="textarea"
                placeholder="Enter the body of instruction"
                value={vals.body}
                name="body"
                required
                id={d.controlx3}
                onChange={handleInput}
                x="true"
                style={{height:'100px', 
                minHeight:'100px',  
                maxHeight:'100px',
              resize:'none'}}
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Body of Instruction
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

export default AddInstruction;
