import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {Alert, Button } from "react-bootstrap";
import d from "./infos.module.css";
import axios from "axios";
import { vacBabyContext } from "../../../data/vacBabydata";
import { useContext } from "react";
import Validateart from "./validationArticle";
const AddInformation = () => {
  const userauth = useContext(vacBabyContext);
const[image,setImage]=useState()
  const [show, setShow] = useState(false);
  const [vals, setVals] = useState({
    topic: "",
    body: "",
    type: "article",
    link: "",
    age:"",
    videoLink:""
  });
  const setdefault=()=>
  {
    setVals( { topic: "",
    body: "",
    type: 'article',
    link: "",
    age:"",
    videoLink:""})
    setImage()
  }
  const [errors,setErrors]=useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validate = (e) => {
    e.preventDefault();

    setErrors(Validateart(vals,image));
    let xc = Validateart(vals,image);

    if (xc.topic === "" && xc.link === "" && xc.videoLink === ""&&xc.image==="") 
{
    const formData = new FormData();
    formData.append("topic", vals.topic);
    formData.append("body", vals.body);
    formData.append("type", vals.type);
    formData.append("link", vals.link);
    formData.append("age", vals.age);
    formData.append("videoLink", vals.videoLink);
    if (image) {
      formData.append("image", image);
    }
        axios
      .post(
        "https://infant-diary-backend.onrender.com/api/v1/information",
        formData,
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
        }
      })
      .catch((err) => alert(err.response.data.message));
  };
  }
  return (
    <div className="mt-3 mb-3 text-center ">
      <Button variant="primary" onClick={handleShow} id={d.btn2}>
        Add new Article
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
              {errors.topic && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.topic}
                </Alert>)}
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
              {errors.link && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.link}
                </Alert>)}
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
              {errors.videoLink && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.videoLink}
                </Alert>)}
            </Form.Group>

           <Form.Group id={d.coll2}>
              <Form.Control
                as="textarea"
                placeholder="Enter the body of article or instruction"
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
                class="form-control-placeholder transition text-start"
              >
               Body of article
              </Form.Label> 
            </Form.Group> 

            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                 type="file"
                 size="lg"
                 id={d.controlx}
                 required
                 x="true"
                 style={{ textAlign: "start" }}
                 onChange={(e) => setImage(e.target.files[0])}
              />
              <Form.Label id={d.label}>Topic image</Form.Label>
              {errors.image && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.image}
                </Alert>)}
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

export default AddInformation;
