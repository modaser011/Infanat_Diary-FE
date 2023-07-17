import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Comment from "../../../assets/comment.png";
import d from "../Children/babies.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";  
import { useParams } from "react-router-dom";
const AddComment = ({_id}) => {
  const userauth = useContext(vacBabyContext);
    const ID = useParams();
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
        `https://infant-diary-backend.onrender.com/api/v1/comment/${ID.id}`,
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
      <div className='d-flex jusitfy-content-center' id={d.com} style={{marginTop:'-.5rem',marginBottom:'-1.5rem',color:'gray',fontSize:'.8rem',fontWeight:'700'}}> <div className='d-flex jusitfy-content-center'><img src={Comment}onClick={handleShow}  className="img-responsive me-1" alt="" style={{cursor:'pointer',width:'20px',height:'20px'}} /><p style={{cursor:'pointer',marginTop:'-.1rem',width:'fit-content'}} onClick={handleShow}>comment</p>
                  </div>
                  </div>
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
                placeholder="write your comment here"
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

export default AddComment;
