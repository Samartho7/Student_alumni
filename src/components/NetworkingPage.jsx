import React from 'react';
import { Container } from 'react-bootstrap';
import './NetworkingPage.css';

const NetworkingPage = () => {
  return (
    <Container className="networking-container">
      <h2>Networking</h2>
      <p>
        Welcome to the Networking Page! Building a strong professional network is essential for career development and success. 
        Our portal provides numerous opportunities for you to connect with fellow students and alumni, helping you expand your horizons and forge meaningful relationships.
      </p>
      <h3>Why Networking is Important?</h3>
      <p>
        Networking allows you to meet people who can offer support, advice, and potential job opportunities. 
        Engaging with peers and alumni can open doors to internships, job referrals, and collaborations, making it a vital component of your career journey.
      </p>
      <h3>Networking Opportunities</h3>
      <p>
        Our portal offers various networking opportunities, including:
        <ul>
          <li>Online forums for discussions and Q&A</li>
          <li>Networking events and workshops</li>
          <li>Alumni meet-ups and panel discussions</li>
        </ul>
        Participating in these activities will enhance your connections and expose you to diverse perspectives in your field.
      </p>
      <h3>Tips for Effective Networking</h3>
      <p>
        Here are some tips to maximize your networking efforts:
        <ol>
          <li>Be genuine and approachable.</li>
          <li>Follow up with new contacts after events.</li>
          <li>Share your experiences and interests to foster connections.</li>
        </ol>
        Remember, networking is a two-way street; be prepared to offer your insights and support to others as well.
      </p>
      <h3>Start Networking Today</h3>
      <p>
        Don’t wait for opportunities to come to you. Take the initiative to reach out, attend events, and build relationships within our community. 
        Together, we can create a network that supports your growth and success!
      </p>
    </Container>
  );
};

export default NetworkingPage;
