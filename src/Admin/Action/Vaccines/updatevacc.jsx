import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Alert, Button } from "react-bootstrap";
import d from "./addVac.module.css";
import AddVacValidate from "./addVacValidate";
import edit from "../../../assets/editw.png";
import axios from "axios";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
const Updatevacc = ({ details, id }) => {
  const data1 = useContext(vacBabyContext);
  const [compulsory, setCompulsory] = useState(
    details.compulsory === "NO" ? "Elective" : "Mandatory"
  );
    const [vals, setVals] = useState({
    name: details.name,
    dose: details.dose,
    age: details.age,
    reason: details.reason,
    sideEffects: details.sideEffects,
  });

  //const nav=useNavigate()
  const [show, setShow] = useState(false);
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const validate = (e) => {
    e.preventDefault();
    setErrors(AddVacValidate(vals));
    const allvals = vals;
    allvals.compulsory = compulsory;
    var json = JSON.stringify(allvals);
    console.log(json);
    let xc = AddVacValidate(vals);
    if (xc.name === "") {
      axios
        .put(
          `https://infant-diary-backend.onrender.com/api/v1/vaccine/${id}`,
          json,
          {
            headers: {
              "Content-Type": "application/json",
              "Content-Type": "application/json",
              token: `${localStorage.getItem('token')}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setShow(false);
            data1.setChangeVacc(!data1.changeVacc)
          } else {
            alert(res.data.Error);
          }
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  return (
    <div className="mb-3 text-center ">
      <Button variant="primary" onClick={handleShow} id={d.btn2}>
        <img
          src={edit}
          alt=""
          className="me-2"
          style={{
            height: "18px",
            width: "18px",
            cursor: "pointer",
            marginTop: "-.2rem",
          }}
        />
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body>
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                value={vals.name}
                placeholder="Enter Username"
                name="name"
                required
                onChange={handleInput}
                id={d.controlx}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Vaccine Name
              </Form.Label>
              {errors.name && (
                <Alert key="danger" variant="danger" id={d.v}>
                  {errors.name}
                </Alert>
              )}
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="number"
                placeholder="Enter Age in month"
                name="age"
                value={vals.age}
                min={1}
                max={36}
                required
                id={d.controlx}
                onChange={handleInput}
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
                placeholder="Enter dose of vaccine"
                name="dose"
                value={vals.dose}
                max={5}
                min={1}
                required
                id={d.controlx}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Dose
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Select
                id={d.controlx}
                aria-label="Default select example"
                value={compulsory}
                onChange={(e) => setCompulsory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Compalsory
                </option>
                <option value="Mandatory">Mandatory</option>
                <option value="Elective">Elective</option>
              </Form.Select>
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Compalsory
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Reasons of taking this vaccine"
                value={vals.reason}
                name="reason"
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
                Reason of taking vaccine
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter side effects of taking this vaccine"
                value={vals.sideEffects}
                name="sideEffects"
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
                Side effects of taking vaccine
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

export default Updatevacc;
