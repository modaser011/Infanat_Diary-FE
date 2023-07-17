import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import sleep from './assets/sleep.jpg'
import feed from './assets/fodd.jpg'
import React, { useContext, useEffect, useState } from "react";
import { vacBabyContext } from "./data/vacBabydata";

function Slider() {
  const [index, setIndex] = useState(0);

  const data1 = useContext(vacBabyContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    data1.informationDetails();
  }, []);

  return (
    <Carousel activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
    >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={feed}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{color:"black"}}>Feeding</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={feed}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>slide title</h3>
            <p>slide subTitle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sleep}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>slide title</h3>
            <p>slide subTitle</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;