import React from 'react';
        import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
    <Carousel variant="dark">
        
      <Carousel.Item className='justify-content-center text-center m-auto'>
        <img
        src="4fc97261-28f4-40ac-8b34-ae996326af4d.png"
          className="d-block justify-content-center text-center m-auto"
          style={{}}
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
 


