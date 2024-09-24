// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Card } from 'react-bootstrap';
// import './AlumniPage.css';
// import alm1 from '../assets/alm1.jpg';
// import alm2 from '../assets/alm2.jpg';
// import alm3 from '../assets/alm3.jpg';
// import alm4 from '../assets/alm4.jpg';
// import alm5 from '../assets/alm5.jpg';
// import alm6 from '../assets/alm6.jpg';
// import alm7 from '../assets/alm7.jpg';
// import alm8 from '../assets/alm8.jpg';
// import alm9 from '../assets/alm9.jpg';
// import alm10 from '../assets/alm10.jpg';
// import alm11 from '../assets/alm11.jpg';
// import alm12 from '../assets/alm12.jpg';

// const alumniData = [
//   { name: 'John Doe', image: alm1, description: 'Software Engineer at Google' },
//   { name: 'Jane Smith', image: alm2, description: 'Data Scientist at Facebook' },
//   { name: 'Robert Brown', image: alm3, description: 'Product Manager at Microsoft' },
//   { name: 'Lisa Johnson', image: alm4, description: 'UX Designer at Apple' },
//   { name: 'Michael Green', image: alm5, description: 'Backend Developer at Amazon' },
//   { name: 'Emily White', image: alm6, description: 'DevOps Engineer at Netflix' },
//   { name: 'William Black', image: alm7, description: 'Frontend Developer at Adobe' },
//   { name: 'Jessica Blue', image: alm8, description: 'Marketing Specialist at Tesla' },
//   { name: 'Chris Gray', image: alm9, description: 'Cloud Engineer at IBM' },
//   { name: 'Sophia Yellow', image: alm10, description: 'AI Engineer at OpenAI' },
//   { name: 'Ethan Green', image: alm11, description: 'Full Stack Developer at Google' },
//   { name: 'Olivia Blue', image: alm12, description: 'Data Scientist at Microsoft' },

//   // Add more alumni data here
// ];

// const AlumniPage = () => {
//   const [search, setSearch] = useState('');
//   const [sort, setSort] = useState('name');

//   const filteredAlumni = alumniData
//     .filter(alumni => alumni.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (sort === 'name') return a.name.localeCompare(b.name);
//       if (sort === 'description') return a.description.localeCompare(b.description);
//       return 0;
//     });

//   return (
//     <Container fluid>
//       <Row className="my-4">
//         <Col md={6}>
//           <Form.Control
//             type="text"
//             placeholder="Search by Name"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//         </Col>
//         <Col md={6}>
//           <Form.Select
//             value={sort}
//             onChange={e => setSort(e.target.value)}
//           >
//             <option value="name">Sort by Name</option>
//             <option value="description">Sort by Description</option>
//           </Form.Select>
//         </Col>
//       </Row>
//       <Row>
//         {filteredAlumni.length === 0 ? (
//           <Col className="text-center my-4">
//             <h4>NO RESULTS</h4>
//           </Col>
//         ) : (
//           filteredAlumni.map((alumni, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card>
//                 <Card.Img className="card-img" variant="top" src={alumni.image} alt={`${alumni.name}`} />
//                 <Card.Body>
//                   <Card.Title>{alumni.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{alumni.description}</Card.Subtitle>
//                   <Card.Text>
//                     Role: {alumni.description}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default AlumniPage;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './AlumniPage.css';
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

// Example images for alumni
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

const AlumniPage = () => {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alumniResponse = await fetch('/alumni.json');
    
        if (!alumniResponse.ok) {
          throw new Error(`HTTP error! status: ${alumniResponse.status}`);
        }
    
        const alumniData = await alumniResponse.json();
        console.log("Fetched Alumni Data:", alumniData); // Log the data to check its structure
    
        // Assuming alumniData has the structure { alumni: [...] }
        if (Array.isArray(alumniData.alumni)) {
          setAlumni(alumniData.alumni); // Set state with the array inside alumni
        } else {
          console.error("Fetched alumni data is not an array:", alumniData);
          setAlumni([]); // Set to empty array if not an array
        }
      } catch (error) {
        console.error("Error fetching alumni data:", error); // Log the specific error
        setAlumni([]); // Ensure alumni is set to an empty array on error
      }
    };
    
  

    fetchData();
  }, []);

  const filteredAlumni = Array.isArray(alumni) ? alumni.filter(alum => 
    alum.name.toLowerCase().includes(search.toLowerCase())
  ) : [];

  return (
    <Container fluid>
      <Row className="my-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filteredAlumni.length === 0 ? (
          <Col className="text-center my-4">
            <h4>NO RESULTS</h4>
          </Col>
        ) : (
          filteredAlumni.map((alum, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={alumniImages[alum.name]} alt={alum.name} />
                <Card.Body>
                  <Card.Title>{alum.name}</Card.Title>
                  <Card.Text>Skills: {alum.skills.join(', ')}</Card.Text>
                  <Card.Text>Interests: {alum.interests.join(', ')}</Card.Text>
                  <Card.Text>Location: {alum.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default AlumniPage;


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Card } from 'react-bootstrap';
// import './AlumniPage.css';
// import stu1 from '../assets/stu1.jpg';
// import stu2 from '../assets/stu2.jpg';
// import stu3 from '../assets/stu3.jpg';
// import stu4 from '../assets/stu4.jpg';
// import stu5 from '../assets/stu5.jpg';
// import alm1 from '../assets/alm1.jpg';
// import alm2 from '../assets/alm2.jpg';
// import alm3 from '../assets/alm3.jpg';
// import alm4 from '../assets/alm4.jpg';
// import alm5 from '../assets/alm5.jpg';
// // ... other alumni images

// const alumniData = [
//   { name: 'John Doe', image: alm1, skills: ['python', 'machine learning'], interests: ['AI', 'data science'], location: 'NY', mentorship: true },
//   { name: 'Jane Smith', image: alm2, skills: ['javascript', 'data science'], interests: ['AI', 'deep learning'], location: 'CA', mentorship: true },
//   { name: 'Robert Brown', image: alm3, skills: ['C++','Game design'], interests: ['Game development','ML'], location: 'TX' },
//   { name: 'Lisa Johnson', image: alm4, skills: ['data science','deep learning'], interests: ['AI','ML'], location: 'FL' },
//   { name: 'Michael Green', image: alm5, skills: ['java','deep learning'], interests: ['AI','NLP'], location: 'IL' },
//   // ... other alumni
// ];

// const students = [
//   { name: 'Aarav Gupta', image: stu1, skills: ['python', 'machine learning'], interests: ['AI', 'data science'], location: 'NY' },
//   { name: 'Ishita Mehra', image: stu2, skills: ['javascript', 'web development'], interests: ['frontend', 'UX'], location: 'CA' },
//   { name: 'Rohit Sharma', image: stu3, skills: ['C++','Game design'], interests: ['Game development','ML'], location: 'INDIA' },
//   { name: 'Neha Patel', image: stu4, skills: ['java','deep learning'], interests: ['data science','AI'], location: 'NZ' },
//   { name: 'Karan Singh', image: stu5, skills: ['python','Machine learning'], interests: ['AI','NLP'], location: 'EUROPE' },
//   // ... other students
// ];

// // Matching logic for alumni against students
// const calculateMatchingScore = (alumni, student) => {
//   let score = 0;

//   const matchingSkills = alumni.skills.filter(skill => student.skills.includes(skill));
//   score += matchingSkills.length * 10;

//   const matchingInterests = alumni.interests.filter(interest => student.interests.includes(interest));
//   score += matchingInterests.length * 5;

//   if (alumni.location === student.location) {
//     score += 20;
//   }

//   if (alumni.mentorship) {
//     score += 15;
//   }

//   return Math.min(score, 100);
// };

// const AlumniPage = () => {
//   const [search, setSearch] = useState('');
//   const [matches, setMatches] = useState({});

//   useEffect(() => {
//     const results = {};
//     alumniData.forEach(alumni => {
//       results[alumni.name] = students.map(student => ({
//         student: student.name,
//         score: calculateMatchingScore(alumni, student),
//         studentImage: student.image,
//       }))
//       .filter(match => match.score > 0) // Only include matches with a score > 0
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 5); // Top 5 matches
//     });
//     setMatches(results);
//   }, []);

//   const filteredAlumni = alumniData.filter(alumni => 
//     alumni.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Container fluid>
//       <Row className="my-4">
//         <Col md={6}>
//           <Form.Control
//             type="text"
//             placeholder="Search by Name"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//         </Col>
//       </Row>
//       <Row>
//         {filteredAlumni.length === 0 ? (
//           <Col className="text-center my-4">
//             <h4>NO RESULTS</h4>
//           </Col>
//         ) : (
//           filteredAlumni.map((alumni, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={alumni.image} alt={alumni.name} className="alumni-img" />
//                 <Card.Body>
//                   <Card.Title>{alumni.name}</Card.Title>
//                   <Card.Text>Skills: {alumni.skills.length ? alumni.skills.join(', ') : 'None'}</Card.Text>
//                   <Card.Text>Interests: {alumni.interests.length ? alumni.interests.join(', ') : 'None'}</Card.Text>
//                   <Card.Text>Location: {alumni.location}</Card.Text>
//                   <h5>Top Matches:</h5>
//                   <ul>
//                     {matches[alumni.name]?.length > 0 ? (
//                       matches[alumni.name].map(match => (
//                         <li key={match.student}>
//                           <img src={match.studentImage} alt={match.student} className="match-img" /> 
//                           {match.student} - {match.score.toFixed(2)}%
//                         </li>
//                       ))
//                     ) : (
//                       <li>No matches found.</li>
//                     )}
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default AlumniPage;

