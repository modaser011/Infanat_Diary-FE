import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import d from "./vaccine.module.css";
import AddVaccine from "./addVaccine";
import Slider from "react-slick";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import { VacBabydata } from "../../../data/vacBabydata";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
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
const AllVaccines = () => {
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
  const { vacc, loud, DetailsVac, x, setX } = useContext(vacBabyContext);

  const [succ1, setSucc1] = useState(false);
  const [succ2, setSucc2] = useState(false);

  const z = () => {
    setSucc2(true);
  };

  if (succ2 === true) {
    //alert('true')
    setSucc1(!succ1);
    setSucc2(false);
  }
  useEffect(() => {
    DetailsVac();
    setTimeout(() => {
      setX(true);
    }, 1000);
  }, [succ1]);
  return (
    <div
      className="justify-content-center align-content-center text-center d-flex container"
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center">
        {vacc.length >= 1 ? (
          <div className="d-flex justify-content-between">
            <h3 id={d.hh} className="align-self-center">
              All Vaccines
            </h3>
            <VacBabydata>
              <AddVaccine z={z} />
            </VacBabydata>
          </div>
        ) : (
          <p></p>
        )}
        <Slider {...settings} className="card__container--inner">
          {vacc.length >= 1 ? (
            vacc.map(({ name, age, _id }, idx) => (
              <Card id={d.card} key={idx}>
                <Link to={`/vaccine/${_id}`} id={d.link} w-50>
                  <Card.Img
                    id={d.card_img}
                    className="justify-content-center text-center"
                    src="babyy.jpg"
                  />
                  <Card.Body
                    className="justify-content-center text-center"
                    style={{ height: "6rem" }}
                  >
                    <h3 id={d.title}> Name: {name}</h3>
                    <h3 id={d.title}> Age: {age}</h3>
                  </Card.Body>
                </Link>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Slider>
        {vacc.length === 0 && loud && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {vacc.length === 0 && !loud && x && (
          <p className="align-self-center">
            there is no vaccines
            <VacBabydata>
              {" "}
              <AddVaccine z={z} />
            </VacBabydata>
          </p>
        )}
      </Container>
    </div>
  );
};

export default AllVaccines;
