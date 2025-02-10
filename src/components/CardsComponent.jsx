import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card1 from '../assets/card1.jpg';  
import card2 from '../assets/card2.jpg';  
import card3 from '../assets/card3.jpg'; 
import './CardsComponent.css';

const CardsComponent = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title className="card-title">Mentorship</Card.Title>
              <Card.Text className="card-text">
                Connect with alumni for mentorship and career guidance.
              </Card.Text>
              <Link to="/mentorship" className="card-link">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title className="card-title">Networking</Card.Title>
              <Card.Text className="card-text">
                Build your professional network with fellow students and alumni.
              </Card.Text>
              <Link to="/networking" className="card-link">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title className="card-title">Resources</Card.Title>
              <Card.Text className="card-text">
                Access exclusive resources shared by the alumni community.
              </Card.Text>
              <Link to="/resources" className="card-link">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsComponent;