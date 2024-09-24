import React from 'react';
import { Container } from 'react-bootstrap';
import './ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <Container className="resources-container">
      <h2>Resources</h2>
      <p>
        Welcome to the Resources Page! Our portal offers a wealth of information and tools designed to support your academic journey and career development. 
        From study materials to career guidance, we have you covered!
      </p>
      <h3>Academic Resources</h3>
      <p>
        Access a variety of academic resources tailored to help you excel in your studies. This includes:
        <ul>
          <li>Online libraries and databases</li>
          <li>Tutoring and study groups</li>
          <li>Course materials and guides</li>
        </ul>
        Utilize these resources to enhance your understanding of key concepts and improve your academic performance.
      </p>
      <h3>Career Development Resources</h3>
      <p>
        Our portal also provides resources to aid in your career development, including:
        <ul>
          <li>Internship and job listings</li>
          <li>Resume and cover letter writing assistance</li>
          <li>Interview preparation tips and workshops</li>
        </ul>
        Take advantage of these resources to prepare for your future career and stand out to potential employers.
      </p>
      <h3>Community Contributions</h3>
      <p>
        We encourage alumni to share their resources and insights with the current student body. 
        If you have valuable materials, articles, or experiences to contribute, please reach out to us to share your knowledge!
      </p>
      <h3>Stay Informed</h3>
      <p>
        Keep an eye on our portal for updates and new resources regularly added to support your educational and professional journey. 
        Together, we can build a repository of knowledge that benefits our entire community!
      </p>
    </Container>
  );
};

export default ResourcesPage;
