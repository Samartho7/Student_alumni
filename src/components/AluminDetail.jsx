// AlumniDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import alumniData from './alumniData'; // Import the alumni data

const AlumniDetail = () => {
  const { id } = useParams();
  const alumni = alumniData[id];

  if (!alumni) {
    return <h4>No Alumni Found</h4>;
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Img variant="top" src={alumni.image} alt={alumni.name} />
        <Card.Body>
          <Card.Title>{alumni.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{alumni.role}</Card.Subtitle>
          <Card.Text>
            <strong>Company:</strong> {alumni.company}<br />
            <strong>Skills:</strong> {alumni.skills}<br />
            <strong>Open to Mentoring:</strong> {alumni.openToMentoring ? 'Yes' : 'No'}<br />
            <strong>Location:</strong> {alumni.location}<br />
            <strong>Passout Year:</strong> {alumni.passoutYear}<br />
            <strong>Bio:</strong> {alumni.bio}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AlumniDetail;
