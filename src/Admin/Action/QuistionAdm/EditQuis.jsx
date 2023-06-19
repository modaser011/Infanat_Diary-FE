import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import d from "./Quistion.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import edit from "../../../assets/edit.png";
import { useContext } from "react";
const EditQuis = ({_id,body,answer,age,virusName}) => {
    const userauth = useContext(vacBabyContext);
   

  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({ body:body,virusName:virusName,age:age,answer:answer });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value })); };

    const validate = (e) => {
        e.preventDefault();
    
        var json = JSON.stringify(vals);
        axios
          .put(
            `https://infant-diary-backend.onrender.com/api/v1/question/${_id}`,
            json,
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
              setShow(false);
              userauth.setChangeQuis(!userauth.changeQuis)
            } else {
              console.log(res.data.Error);
            }
          })
          .catch((err) => alert(err.response.data.message));
      };
    
    return (
        <div className="me-2 mb-3 text-center ">
       <img src={edit} alt="" className="mx-0 px-0 mb-2 img-responsive"
                style={{ height: "18px", width: "18px",cursor:'pointer' }}  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
          <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter age in months"
                min={1}
                required
                id={d.controlx}
                name="age"
                value={vals.age}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                age
              </Form.Label>
            </Form.Group>
            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter the name of virus"
                required
                id={d.controlx}
                name="virusName"
                value={vals.virusName}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                virus Name
              </Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              id={d.coll2}
            >
              <Form.Control
                as="textarea"
                placeholder="Write the quistion"
                value={vals.body}
                name="body"
                required
                id={d.controlx}
                onChange={handleInput}
                x="true"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              id={d.coll2}
            >
              <Form.Control
                as="textarea"
                placeholder="Write the Answer"
                value={vals.answer}
                name="answer"
                required
                id={d.controlx}
                onChange={handleInput}
                x="true"
              />
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


export default EditQuis;
