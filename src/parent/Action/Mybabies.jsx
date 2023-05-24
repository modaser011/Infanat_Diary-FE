import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import d from "./babies.module.css";
import AddBaby from "./addBaby";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { vacBabyContext } from "../../data/vacBabydata";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { VacBabydata } from "../../data/vacBabydata";
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
const Mybabies = () => {
  const { babies, loud, x, setX, Detailschild } = useContext(vacBabyContext);

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
  useEffect(() => {
    Detailschild();
    setTimeout(() => {
      setX(true);
    }, 1000);
  }, [succ1]);
  const userauth=useContext(vacBabyContext)
  console.log("token1 =  "+ userauth.token)
  return (
    <div
      className="justify-content-center align-content-center text-center d-flex container "
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center mt-5 mb-5">
        <div>in this section you can find all your babies</div>
        <br />
        {babies.length >= 1 ? (
          <div className="d-flex justify-content-between align-content-start">
            <h3 id={d.hh} className="align-self-center">
              All my Babies
            </h3>
            <Form.Control
              style={{
                width: "300px",
                height: "2.2rem",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="rounded-pill text-center align-self-center me-2"
            />
              <AddBaby />
          </div>
        ) : (
          <p></p>
        )}
        <Slider {...settings} className="card__container--inner">
          {babies.length >= 1 ? (
            babies.map(({ name }, idx) => (
              <Card id={d.card} key={idx} style={{ width: "18rem" }}>
                <Link to="/" id={d.link} w-50>
                  <Card.Img
                    id={d.card_img}
                    className="justify-content-center text-center"
                    src="babyy.jpg"
                  />
                  <Card.Body className="justify-content-center text-center">
                    <Card.Title>
                      <h3 id={d.title}> Name: {name}</h3>
                    </Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Slider>
        {babies.length === 0 && loud && (
          <p className="align-self-start">loading...</p>
        )}
        {babies.length === 0 && !loud && x && (
          <p className="align-self-center">
            there is no vaccines
            <AddBaby z={z} />
          </p>
        )}{" "}
      </Container>
    </div>
  );
};
export default Mybabies;
