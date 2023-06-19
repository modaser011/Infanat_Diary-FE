import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import edit from "../../../assets/edit.png";
import d from "../Children/babies.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext,useEffect } from "react";
const EditPost = ({_id,body}) => {
  const userauth = useContext(vacBabyContext);
  const [show, setShow] = useState(false);
  console.log(body)
  useEffect(() => {
    setVals(body);
  }, [body]);
  const [vals, setVals] = useState({body:body});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validate = (e) => {
    e.preventDefault();

    var json = JSON.stringify(vals);
    axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/post/${_id}`,
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
    <div className="mb-1 text-center ">
      <img src={edit} alt="" className="mx-0 px-0 mb-2 img-responsive"
                style={{ height: "18px", width: "18px",cursor:'pointer' }}  onClick={handleShow}/>
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

export default EditPost;
