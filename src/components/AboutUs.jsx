import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardsComponent from './CardsComponent'; // Import CardsComponent
import './AboutUs.css'; // Import custom CSS for AboutUs

const AboutUs = () => {
  return (
    <Container className="about-us-container"> {/* Apply the about-us class here */}
      <Row>
        <Col>
          <h2 className="center-heading">About Us</h2> {/* Centered heading */}
          <p>
            Welcome to our Student-Alumni Portal, a dynamic platform crafted to strengthen the connection between current students and alumni. Our mission is to foster a vibrant and supportive community where students and alumni can engage, collaborate, and grow together.
          </p>

          <h3>For Students</h3>
          <p>
            Our portal offers a wealth of resources designed to enhance your educational journey and career development. Students can access a range of tools and information, including academic resources and career guidance, internship opportunities, and industry insights. By connecting with alumni, you gain access to invaluable mentorship and advice, helping you navigate your career path and make informed decisions about your future. Additionally, the portal provides opportunities to participate in community events, workshops, and networking sessions, enriching your overall experience.
          </p>

          <h3>For Alumni</h3>
          <p>
            As a valued member of our alumni community, the portal serves as a hub for staying connected with your alma mater and fellow graduates. You can share your professional experiences, achievements, and insights with the next generation of students, contributing to their growth and development. The platform also allows you to engage with ongoing institutional activities, support community initiatives, and give back to the institution that played a pivotal role in your own journey.
          </p>

          <h3>Our Vision</h3>
          <p>
            We envision a collaborative space where students and alumni work together to build a thriving community that benefits all its members. By fostering meaningful connections and facilitating the exchange of knowledge and experiences, we aim to create a supportive environment that empowers both students and alumni to achieve their goals.
          </p>

          <p>
            Join us in bridging the gap between the present and the future. Together, we can shape the success of the next generation and celebrate the achievements of those who have walked the path before us.
          </p>
        </Col>
      </Row>

      {/* Render the CardsComponent below the About Us content */}
      <Row className="mt-4">
        <Col>
          <CardsComponent /> {/* CardsComponent added here */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
