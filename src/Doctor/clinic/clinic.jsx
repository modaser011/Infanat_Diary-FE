import React, { useContext, useEffect} from "react";
import d from "../../parent/Action/Children/babies.module.css";
import { Alert, Card,Container, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../data/vacBabydata";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {useNavigate} from "react-router-dom";
import clinics1 from "../../assets/clinic-icon.png";

function Right(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="right1.png"
      alt="right"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Left(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="left1.png"
      alt="left"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Clinic = () => {
  const nav=useNavigate()

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <Right />,
    prevArrow: <Left />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  
  const data1 = useContext(vacBabyContext);
  useEffect(() => {
    data1.doctorinfo();
  }, []);
  console.log(data1.token)

  return (
     <div
      className="justify-content-center align-content-center text-center d-flex container"
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center mt-5 mb-5">
        {data1.clinicksDoctor.length >= 1 ? (
  <div className="d-flex justify-content-between align-items-start mx-1 mb-3" >
  <h1>Clinics</h1>
  <Link 
    to="/allBabies"
    className="d-flex align-self-end"
    style={{ textDecoration: "none", fontWeight: "600" }}
  >
    <p id={d.lnk}>See all</p>
    <img
      src="pngegg.png"
      style={{ width: "10px", height: "10px" }}
      className="ms-1 mt-2"
      alt=""
    />
  </Link>          
  </div>
  
        ) : (
          <></>
        )}
        <Slider {...settings} className="card__container--inner">
        {data1.clinicksDoctor.length >= 1 ? (
           data1.docinfo.clinics.map(({ name, _id}) => (
              <Card id={d.card} key={_id} style={{ width: "18rem" ,cursor:'pointer'}} onClick={()=>nav(`/babyPage/${_id}`)} >
                  <Card.Img
                    id={d.card_img}
                    className="justify-content-center text-center img-responsive mt-3 mx-auto"
                    src={clinics1}
                     alt="" style={{width:'200px',cursor:'pointer'}}/>
                  <Card.Body className="justify-content-center text-center"style={{cursor:'pointer'}}>
                    <Card.Title >
                      <h3 id={d.title}> Name: {name}</h3>
                    </Card.Title>
                  </Card.Body>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Slider>
          {data1.clinicksDoctor.length === 0 && data1.clinicLoud && (
            <div className="my-5 mx-auto text-center">
              <Spinner
                animation="border my-5"
                className="my-5 mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {data1.clinicksDoctor.length === 0 && !data1.clinicLoud && (
            <Alert variant="warning"> There is no clinics</Alert>
          )}
        </Container>
    </div>
  );
};

export default Clinic;
