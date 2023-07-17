import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import d from "./announce.module.css";
import edit from "../../../assets/edit.png";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
const EditAnnounce = ({body,title,_id}) => {
  const userauth = useContext(vacBabyContext);
  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({ body:body , title:title });
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
        `https://infant-diary-backend.onrender.com/api/v1/announcement/${_id}`,
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
          userauth.setChangeAnnonce(!userauth.changeannonce);
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="mt-2 text-center ">
      <img src={edit} alt="" className="mx-0 px-0 img-responsive"
                style={{ height: "18px", width: "18px",cursor:'pointer' }}  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                required
                onChange={handleInput}
                id={d.controlx}
                value={vals.title}
                x="true"
                name="title"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Title
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                as="textarea"
                placeholder="Enter the announcement"
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
               Body of Announcement
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

export default EditAnnounce;
