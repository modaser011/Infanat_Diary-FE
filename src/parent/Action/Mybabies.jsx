import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import d from './babies.module.css'
import AddBaby from './addBaby'; 
import React from "react";
import Slider from "react-slick";
import { useContext } from 'react';
import { babyContext } from '../../data/babydata';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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
const Mybabies = () => {
  const {babies,setsearcher,searcher,search}=useContext(babyContext)
  const babies2=searcher()
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
            <div className='justify-content-center align-content-center text-center d-flex'id={d.cont}>
              <Container className='justify-content-center align-content-center align-self-center'>
      {babies.length >=1?<div className='d-flex justify-content-between'><h3 id={d.hh} className='align-self-center'>All my Babies</h3>
            <AddBaby/> </div>:<p></p>}
      <Slider {...settings} className="card__container--inner">   
                {babies.length >=1? babies.map(({name},idx)=>(
                     <Card id={d.card} key={idx} style={{ width: '18rem' }} >
                      <Link to="/" id={d.link} w-50>
                      <Card.Img  id={d.card_img} className='justify-content-center text-center' src="babyy.jpg" />
                   <Card.Body className='justify-content-center text-center'>
                   <Card.Title ><h3 id={d.title}> Name: {name}</h3></Card.Title>
                   </Card.Body>
                   </Link>
        </Card>))
 
      : 
      <></>        
     }</Slider>
              {babies.length >=1?<></>:<p className='text center align-self-center'>you don't have any Babies<AddBaby/></p>}
     </Container>
          </div>      );
          }
export default Mybabies;
