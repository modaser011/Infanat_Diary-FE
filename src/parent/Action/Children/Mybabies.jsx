import { Alert, Container, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import d from "./babies.module.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import { Link } from "react-router-dom";
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
const Mybabies = () => {
  const nav = useNavigate();
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
  const { babies, loud2, x, setX, Detailschild, change } =
    useContext(vacBabyContext);
  useEffect(() => {
    Detailschild();
  }, [change]);

  return (
    <div
      className="justify-content-center align-content-center text-center d-flex container"
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center mt-5 mb-5">
        {babies.length >= 1 ? (
          <div className="d-flex justify-content-between align-items-start mx-1 mb-3">
            <h1>Babies</h1>
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
        <Container>
        <Slider {...settings} className="card__container--inner">
          {babies.length >= 1 ? (
            babies.map(({ name, _id }) => (
              <Card
                id={d.card}
                key={_id}
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => nav(`/babyPage/${_id}`)}
              >
                <Card.Img
                  id={d.card_img}
                  className="justify-content-center text-center"
                  src="babyy.jpg"
                  style={{ height: "200px", cursor: "pointer" }}
                />
                <Card.Body
                  className="justify-content-center text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Title>
                    <h3 id={d.title}> Name: {name}</h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Slider>
        </Container>
        {babies.length === 0 && loud2 && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {babies.length === 0 && !loud2 && (
          <p className="align-self-center">
            <Alert variant="warning">There is no Babies</Alert>
            <p> You can add new baby from This page</p>
            <Link to="/allBabies">All Children</Link>
          </p>
        )}
      </Container>
    </div>
  );
};
export default Mybabies;
