import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import car1 from '../assets/car1.jpg';  
import car2 from '../assets/car2.jpg';  
import car3 from '../assets/car3.jpg'; 
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={car1} alt="First slide"/>
          <Carousel.Caption>
            <h3>Welcome to Our Portal</h3>
            <p>Connecting Students and Alumni</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={car2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Alumni Network</h3>
            <p>Stay Connected, Stay Informed</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={car3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Student Support</h3>
            <p>Guidance, Mentorship, and More</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
