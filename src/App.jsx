import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import CardsComponent from './components/CardsComponent';
import CarouselComponent from './components/CarouselComponent';
import AboutUs from './components/AboutUs.jsx';
import FooterComponent from './components/FooterComponent';
import AlumniPage from './components/AlumniPage.jsx';
import AlumniCardsComponent from './components/AlumniCarouselComponent.jsx';
import StudentPage from './components/StudentPage.jsx'; 
import Login from './components/Login.jsx'; 
import Chat from './components/Chat.jsx'; 
import Forums from './components/Forums.jsx';
import MentorshipPage from './components/MentorshipPage.jsx';
import NetworkingPage from './components/NetworkingPage.jsx';
import ResourcesPage from './components/ResourcesPage.jsx';
import './App.css'; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <CarouselComponent />
                <h2 className="mt-4 text-center">Our Services</h2>
                <CardsComponent />
                <h2 className="mt-4 text-center">Our Top Mentors</h2>
                <AlumniCardsComponent /> 
              </>
            } 
          />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/forums" element={<Forums />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/networking" element={<NetworkingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
