import { Alert, Container, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import d from "../../../parent/Action/Children/babies.module.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import { Link } from "react-router-dom";
import Hosp from "../../../assets/hosp12.webp";
import { useNavigate } from "react-router-dom";
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
const HospSlider = () => {
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
    data1.hospitalDetails();
  }, [data1.HospitalChange]);
  const nav = useNavigate();

  return (
    <div
      className="justify-content-center align-content-center text-center d-flex container"
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center mt-5 mb-5">
        {data1.hospital.length >= 1 ? (
          <div className="d-flex justify-content-between align-items-start mx-1 mb-3">
            <h1>Hospitals</h1>
            <Link
              to="/hospitals"
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
        <Container>
        <Slider {...settings} className="card__container--inner">
          {data1.hospital.length >= 1 ? (
            data1.hospital.map(({ name, _id }) => (
              <Card
                id={d.card}
                key={_id}
                style={{ width: "18rem" }}
                onClick={() => nav(`/hospital/${_id}`)}
              >
                <Card.Img
                  id={d.card_img}
                  className="justify-content-center text-center"
                  src={Hosp}
                  style={{ height: "200px", cursor: "pointer" }}
                />
                <Card.Body
                  style={{cursor: "pointer" }}
                  className="justify-content-center text-center"
                >
                  <Card.Title>
                    <h3 id={d.title}>{name}</h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Slider>
        </Container>
        {data1.hospital.length === 0 && data1.loudHosp && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {data1.hospital.length === 0 && !data1.loudHosp && (
          <p className="align-self-center">
            <Alert variant="warning">There is no Hospitals</Alert>
          </p>
        )}
      </Container>
    </div>
  );
};
export default HospSlider;
