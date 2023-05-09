import React from 'react';
import { Col, Container,Button } from 'react-bootstrap';
import {Row,Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import d from './vaccine.module.css'
import Zoom from 'react-reveal/Zoom';
import AddVaccine from './addVaccine';
import Slider from "react-slick";

function Right(props) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#F5F7FD" }}
        onClick={onClick}
      />
    );
  }

  const { className, style, onClick } = props;
  return (
    <img src='right1.png' alt="right"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function Left(props) {
  const { className, style, onClick } = props;
  return (
    <img src='left1.png' alt="left"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const AllVaccines = ({vacc,temp3,filter}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <Right/>,
    prevArrow: <Left />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
            infinite: true,
            dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
            dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
            dots: true
        }
      }
    ]
  };

    
     return (
      <div className='justify-content-center align-content-center text-center d-flex container'id={d.cont}>
      <Container className='justify-content-center align-content-center align-self-center'>
{vacc.length >=1?<div className='d-flex justify-content-between'><h3 id={d.hh} className='align-self-center'>All Vaccines</h3>
    <AddVaccine/> </div>:<p></p>}
<Slider {...settings} className="card__container--inner">   
        {vacc.length >=1? vacc.map(({name,age},idx)=>(
             <Card id={d.card} key={idx}  >
              <Link to="/" id={d.link} w-50>
              <Card.Img  id={d.card_img} className='justify-content-center text-center' src="babyy.jpg" />
           <Card.Body className='justify-content-center text-center'style={{ height: '6rem' }}>
           <Card.Title ><h3 id={d.title}> Name: {name}</h3></Card.Title>
           <Card.Title  className='mb-4'><h3 id={d.title}> Age: {age}</h3></Card.Title>

           </Card.Body>
           </Link>
</Card>))

: 
<></>        
}</Slider>
      {vacc.length >=1?<></>:<p className='text center align-self-center'>there is no vaccines<AddVaccine/></p>}
</Container>
  </div>      );
  }

export default AllVaccines;
