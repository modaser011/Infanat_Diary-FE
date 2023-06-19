import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import d from "../Children/babies.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
const AddPost = () => {
  const userauth = useContext(vacBabyContext);

  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({ body: "" });

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
        "https://infant-diary-backend.onrender.com/api/v1/post",
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
          userauth.setChangePost(!userauth.changePost)
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="mt-3 mb-3 text-center ">
      <Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new post
      </Button>
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
                placeholder="what is new"
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

export default AddPost;
