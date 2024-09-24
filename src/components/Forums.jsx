import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Forums.css';

const forumsData = [
  { id: 1, title: 'General Discussions', description: 'Talk about anything related to alumni' },
  { id: 2, title: 'Career Advice', description: 'Share and seek career guidance' },
  { id: 3, title: 'Job Postings', description: 'Post or look for job opportunities' },
];

const Forums = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center">Forums</h2>
          <h3 className="text-center">Join discussions with alumni and students</h3>
        </Col>
      </Row>

      <Row className="mb-3 justify-content-end">
        <Col md="auto">
          <Button variant="success">Create New Post</Button>
        </Col>
      </Row>

      <Row>
        {forumsData.map(forum => (
          <Col key={forum.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{forum.title}</Card.Title>
                <Card.Text>{forum.description}</Card.Text>
                <Button variant="outline-primary">Join Discussion</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Forums;
