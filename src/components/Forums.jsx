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
     <Row className="my-4 text-center">
        <Col>
          <h2>Forums</h2>
        </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h3>Join discussions with alumni and students</h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}> {/* Adjust width of the column */}
            {forumsData.map(forum => (
              <Card key={forum.id} className="forum-card">
                <Card.Body>
                  <Card.Title>{forum.title}</Card.Title>
                  <Card.Text>{forum.description}</Card.Text>
                  <button className="join-discussion-btn">Join Discussion</button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
    </Container>
  );
};

export default Forums;
