import React, { useState, useEffect } from 'react';
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

const alumniImages = {
  'John Doe': alm1,
  'Jane Smith': alm2,
  'Robert Brown': alm3,
  'Lisa Johnson': alm4,
  'Michael Green': alm5,
  'Emily White': alm6,
  'William Black': alm7,
  'Jessica Blue': alm8,
  'Chris Gray': alm9,
  'Sophia Yellow': alm10,
  'Ethan Green': alm11,
  'Olivia Blue': alm12
};

const AlumniCarouselComponent = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/alumni.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        if (Array.isArray(data.alumni)) {
          setAlumni(data.alumni);
        } else {
          console.error("Unexpected data structure:", data);
          setAlumni([]);
        }
      } catch (error) {
        console.error("Error fetching alumni data:", error);
        setAlumni([]);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel 
      className="alumni-carousel"
      nextIcon={<VscTriangleRight style={{ color: 'black', fontSize: '3rem' }} />}
      prevIcon={<VscTriangleLeft style={{ color: 'black', fontSize: '3rem' }} />}
    >
      {Array.from({ length: Math.ceil(alumni.length / 5) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <Row className="justify-content-center g-3">
            {alumni.slice(slideIndex * 5, slideIndex * 5 + 5).map((alum, index) => (
              <Col key={index} md={2} className="d-flex justify-content-center">
                <Card className="alumni-card">
                  <Card.Img variant="top" src={alumniImages[alum.name]} alt={alum.name} />
                  <Card.Body className="card-content">
                    <Card.Title>{alum.name}</Card.Title>
                    <Card.Text>Skills: {alum.skills.join(', ')}</Card.Text>
                    <Card.Text>Interests: {alum.interests.join(', ')}</Card.Text>
                    <Card.Text>Location: {alum.location}</Card.Text>
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
