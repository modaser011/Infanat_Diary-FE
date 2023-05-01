import React from 'react';
        import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
    <Carousel variant="dark">
        
      <Carousel.Item className='justify-content-center text-center m-auto'>
        <img
        src="Logo ()(1).png "
          className="d-block w-50 h-50 justify-content-center text-center m-auto"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
 


