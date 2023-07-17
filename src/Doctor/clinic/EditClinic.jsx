import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import d from "./clinic.module.css";
import { vacBabyContext } from "../../data/vacBabydata";
import axios from "axios";
import { useContext } from "react";
import InputMask from "react-input-mask";
import edit from "../../assets/edit.png";

const EditClinic = ({details}) => {
  const userauth = useContext(vacBabyContext);
  const [show, setShow] = useState(false);

  const [vals, setVals] = useState({
    name: details.name,
    email: details.email,
    address: details.address,
    city: details.city,
    state:details.state,
    zip: details.zip,
    phone: details.phone,
    link: details.link,
  });
  const handleInput = (e) => {
    setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const validate = (e) => {
    e.preventDefault();
      var json = JSON.stringify(vals);
      axios.put(`https://infant-diary-backend.onrender.com/api/v1/clinic/${details._id}`, json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setShow(false);
            userauth.setDoctorInfochange(!userauth.doctorInfoChange);
          } else {
            console.log(res.data.Error);
          }
        })
        .catch((err) => alert(err.response.data.message));
    }
  return (
    <div className="mt-3 mb-3 text-center ">        

<img src={edit} alt="" className="mx-0 px-0 mb-2 img-responsive"
                style={{ height: "18px", width: "18px",cursor:'pointer' }}  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} className="my-auto">
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body className="my-auto">
          <Form className="text-center mx-sm-5" onSubmit={validate}>
            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="text"
                value={vals.name}
                placeholder="Enter clinic name"
                required
                onChange={handleInput}
                id={d.controlx}
                name="name"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Clinic Name
              </Form.Label>
            </Form.Group>


            <Form.Group className="mb-2" id={d.coll2}>
              <Form.Control
                type="email"
                placeholder="Enter clinic email"
                onChange={handleInput}
                required
                id={d.controlx}
                x="true"
                name="email"
                value={vals.email}
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Clinic Email address
              </Form.Label>
            </Form.Group>

           
            <Form.Group className="mb-2" id={d.coll2}>
              <InputMask
                x="true"
                className="number ps-2"
                name="phone"
                value={vals.phone}
                onChange={handleInput}
                id={d.controlx}
                mask="+20\ 999 9999 999"
                maskChar=" "
                required
                placeholder="Phone number"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Phone
              </Form.Label>
              </Form.Group>


            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter address"
                required
                id={d.controlx}
                value={vals.address}
                onChange={handleInput}
                name="address"
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Address
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter city"
                required
                id={d.controlx}
                value={vals.city}
                name="city"
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                City
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter state"
                required
                id={d.controlx}
                name="state"
                value={vals.state}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                State
              </Form.Label>
            </Form.Group>

            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                required
                id={d.controlx}
                name="zip"
                value={vals.zip}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
                Zip code
              </Form.Label>
            </Form.Group>

           

            <Form.Group id={d.coll2}>
              <Form.Control
                type="text"
                placeholder="Enter link"
                required
                id={d.controlx}
                name="link"
                value={vals.link}
                onChange={handleInput}
                x="true"
              />
              <Form.Label
                id={d.label}
                class="form-control-placeholder transition"
              >
               Hospital Link
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

export default EditClinic;
