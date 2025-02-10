import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc"; 
import './AlumniCarousel.css'; 
import alm1 from '../assets/alm1.jpg';
import alm2 from '../assets/alm2.jpg';
import alm3 from '../assets/alm3.jpg';
import alm4 from '../assets/alm4.jpg';
import alm5 from '../assets/alm5.jpg';
import alm6 from '../assets/alm6.jpg';
import alm7 from '../assets/alm7.jpg';
import alm8 from '../assets/alm8.jpg';
import alm9 from '../assets/alm9.jpg';
import alm10 from '../assets/alm10.jpg';
import alm11 from '../assets/alm11.jpg';
import alm12 from '../assets/alm12.jpg';

const AlumniCarouselComponent = () => {
  const alumniProfiles = [
    { name: 'John Doe', image: alm1, description: 'Software Engineer at Google' },
    { name: 'Jane Smith', image: alm2, description: 'Data Scientist at Facebook' },
    { name: 'Robert Brown', image: alm3, description: 'Product Manager at Microsoft' },
    { name: 'Lisa Johnson', image: alm4, description: 'UX Designer at Apple' },
    { name: 'Michael Green', image: alm5, description: 'Backend Developer at Amazon' },
    { name: 'Emily White', image: alm6, description: 'DevOps Engineer at Netflix' },
    { name: 'William Black', image: alm7, description: 'Frontend Developer at Adobe' },
    { name: 'Jessica Blue', image: alm8, description: 'Marketing Specialist at Tesla' },
    { name: 'Chris Gray', image: alm9, description: 'Cloud Engineer at IBM' },
    { name: 'Sophia Yellow', image: alm10, description: 'AI Engineer at OpenAI' },
    { name: 'Ethan Green', image: alm11, description: 'Full Stack Developer at Google' },
    { name: 'Olivia Blue', image: alm12, description: 'Data Scientist at Microsoft' },
  ];

  return (
    <Carousel 
      className="alumni-carousel"
      nextIcon={<VscTriangleRight style={{ color: 'black', fontSize: '3rem' }} />}
      prevIcon={<VscTriangleLeft style={{ color: 'black', fontSize: '3rem' }} />}
    >
      {[0, 5, 10].map((startIndex) => ( // Now displaying 5 per slide
        <Carousel.Item key={startIndex}>
          <Row className="justify-content-center g-3">
            {alumniProfiles.slice(startIndex, startIndex + 5).map((alumni, index) => (
              <Col key={index} md={2} className="d-flex justify-content-center"> {/* Adjusted to 2-column size */}
                <Card className="alumni-card">
                  <Card.Img variant="top" src={alumni.image} />
                  <Card.Body>
                    <Card.Title>{alumni.name}</Card.Title>
                    <Card.Text>{alumni.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AlumniCarouselComponent;
