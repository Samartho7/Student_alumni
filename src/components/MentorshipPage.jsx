import React from 'react';
import { Container } from 'react-bootstrap';
import './MentorshipPage.css';

const MentorshipPage = () => {
  return (
    <Container className="mentorship-container">
      <h2>Mentorship</h2>
      <p>
        Welcome to the Mentorship Page! Here, you can connect with alumni who are eager to share their knowledge and experiences with you. 
        Mentorship is a powerful tool for personal and professional growth, providing you with guidance and support as you navigate your career path.
      </p>
      <h3>Why Mentorship Matters?</h3>
      <p>
        Mentorship provides a unique opportunity to learn from those who have walked the path before you. 
        Our alumni possess valuable insights and experiences that can help you make informed decisions about your future. 
        Whether you're seeking advice on internships, job applications, or career transitions, our mentors are here to help.
      </p>
      <h3>How to Connect?</h3>
      <p>
        Connecting with a mentor is simple! Browse our list of available mentors on the portal, where you can view their profiles, areas of expertise, 
        and availability. Once you find a mentor that aligns with your interests and goals, reach out to them directly through the platform to initiate a conversation.
      </p>
      <h3>Get Involved</h3>
      <p>
        We encourage students to actively engage in mentorship activities, including one-on-one meetings, group workshops, and networking events. 
        By participating, you can not only gain insights from experienced professionals but also build lasting connections that can benefit your career.
      </p>
      <h3>Join Us</h3>
      <p>
        Embrace the opportunity to grow through mentorship. Together, we can create a supportive environment that empowers you to achieve your goals. 
        Let's connect, collaborate, and pave the way for your future success!
      </p>
      </Container>
  );
};

export default MentorshipPage;
