import d from "./userType.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import parent from "../assets/parent.png";
import Hosp from "../assets/hospital.avif";
import doctor from "../assets/docc.png";
import { useNavigate } from "react-router-dom";
const UserTypeRegister = () => {
  const nav = useNavigate();
  return (
    <div
      id={d.cont}
      className="justify-content-center d-flex align-items-center"
    >
      <Container className="py-4 py-auto align-content-center">
        <h1 className="text-center">Select Your Role to register</h1>
        <hr />
        <Row className="justify-content-center pt-4 pb-5 d-flex container mx-auto">
          <Col
            md={true}
            id={d.col2}
            className="py-5 d-block me-3 mb-3 mx-auto text-center"
          >
            <img
              src={parent}
              alt=""
              className="mx-0 mb-4 px-0 img-responsive"
              style={{ height: "110px", width: "110px" }}
            />
            <h4>Parent</h4>
            <Button
              id={d.btn}
              name="RegisterParent"
              onClick={()=>(nav(`/RegisterParent`))}
              className=" mt-4 btn "
              variant="outline-light"
            >
              Continue
            </Button>
          </Col>
          <Col
            md={true}
            id={d.col3}
            className="py-5 mb-3 d-block me-3 mx-auto text-center"
          >
            <img
              src={doctor}
              alt=""
              className="mx-0 mb-4 px-0 img-responsive"
              style={{ height: "110px", width: "110px" }}
            />
            <h4>Doctor</h4>
            <Button
              id={d.btn}
              name="RegisterDoctor"
              onClick={()=>(nav(`/RegisterDoctor`))}
              className="mt-4 btn "
              variant="outline-light"
            >
              Continue
            </Button>
          </Col>
          <Col
            md={true}
            id={d.col3}
            className="py-5 mb-3 d-block me-3 mx-auto text-center"
          >
            <img
              src={Hosp}
              alt=""
              className="mx-0 mb-4 px-0 img-responsive"
              style={{ height: "110px", width: "110px" }}
            />
            <h4>Hospital</h4>
            <Button
              id={d.btn}
              className=" mt-4 btn "
              name="RegisterHospital"
              onClick={()=>(nav(`/RegisterHospital`))}
              variant="outline-light"
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UserTypeRegister;
