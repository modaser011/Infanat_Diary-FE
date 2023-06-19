import { Alert, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, { useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import d from "../Children/babies.module.css";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
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
const SliderDoctor = () => {
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
  const dataDoc = useContext(vacBabyContext);

   useEffect(() => {
    dataDoc.doctorDetails();
  }, []);

  return (
    <div
      className="justify-content-center align-content-center text-center d-flex container bg-white"
      id={d.cont}
    >
      <Container className="justify-content-center align-content-center align-self-center mt-5 mb-5">
      {dataDoc.docDetail.length >= 1?(
        <div className="d-flex justify-content-between align-items-start mx-2">
          <h1>Doctors</h1>
          <Link 
            to="/allDoctors"
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
        {dataDoc.docDetail.length >= 1 ? (
            dataDoc.docDetail.map(({ name}, idx) => (
          <Card id={d.card} style={{ width: "18rem" }} key={idx}>
            <Link to="/" id={d.link} w-50>
              <Card.Img
                id={d.card_img}
                className="justify-content-center text-center"
                src="doc.avif"
                style={{ height: "200px" }}
              />
              <Card.Body
                className="justify-content-center text-center "
                style={{ height: "10%" }}
              >
                <Card.Title>
                  <p> {name}</p>
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
           ))
           ) : (
             <></>
           )}

        </Slider>
        {dataDoc.docDetail.length === 0 && dataDoc.loudDoc && (
          <p className="align-self-start">loading...</p>
        )}
        {dataDoc.docDetail.length === 0 && !dataDoc.loudDoc &&(
          <p className="align-self-center">
            <Alert variant='warning'>There is no Doctors Till now</Alert>
          </p>
        )}
      </Container>
    </div>
  );
};

export default SliderDoctor;
