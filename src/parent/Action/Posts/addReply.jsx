import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import d from "../Children/babies.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";  
const AddReply = ({_id}) => {
  const userauth = useContext(vacBabyContext);
  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({ body: "" });
  console.log(_id)

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
        `https://infant-diary-backend.onrender.com/api/v1/reply/${_id}`,
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
          userauth.setChangePost(!userauth.changePost)
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };


  
  return (
    <div className="text-center ">
  
                  <p className="me-3" style={{
                    width: "fit-content",
                    color: "gray",
                    fontSize: ".8rem",
                    fontWeight: "600",
                    cursor:'pointer'
                  }}
                  onClick={handleShow}>reply</p>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group
              className="mb-3"
              id={d.coll2}
            >
              <Form.Control
                as="textarea"
                placeholder="write your reply"
                value={vals.body}
                name="body"
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
                Add
              </button>
              </Form.Group>

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddReply;
