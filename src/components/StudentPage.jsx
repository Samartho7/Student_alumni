// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Card } from 'react-bootstrap';
// import './StudentPage.css';
// import stu1 from '../assets/stu1.jpg';
// import stu2 from '../assets/stu2.jpg';
// import stu3 from '../assets/stu3.jpg';
// import stu4 from '../assets/stu4.jpg';
// import stu5 from '../assets/stu5.jpg';
// import stu6 from '../assets/stu6.jpg';
// import stu7 from '../assets/stu7.jpg';
// import stu8 from '../assets/stu8.jpg';
// import stu9 from '../assets/stu9.jpg';
// import stu10 from '../assets/stu10.jpg';

// const studentData = [
//   { name: 'Aarav Gupta', image: stu1, description: 'Mtech Student' },
//   { name: 'Ishita Mehra', image: stu2, description: 'BCA Student' },
//   { name: 'Rohit Sharma', image: stu3, description: 'BTech Student' },
//   { name: 'Neha Patel', image: stu4, description: 'MCA Student' },
//   { name: 'Karan Singh', image: stu5, description: 'BCA Student' },
//   { name: 'Anjali Rao', image: stu6, description: 'BTech Student' },
//   { name: 'Rahul Verma', image: stu7, description: 'MCA Student' },
//   { name: 'Priya Desai', image: stu8, description: 'BTech Student' },
//   { name: 'Sahil Jain', image: stu9, description: 'BCA Student' },
//   { name: 'Sneha Kapoor', image: stu10, description: 'MCA Student' },
//   // Add more student data here
// ];

// const StudentPage = () => {
//   const [search, setSearch] = useState('');
//   const [sort, setSort] = useState('name');

//   const filteredStudent = studentData
//     .filter(student => student.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (sort === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sort === 'description') {
//         return a.description.localeCompare(b.description);
//       }
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
//             <option value="description">Sort by Course</option>
//           </Form.Select>
//         </Col>
//       </Row>
//       <Row>
//         {filteredStudent.length === 0 ? (
//           <Col className="text-center my-4">
//             <h4>NO RESULTS</h4>
//           </Col>
//         ) : (
//           filteredStudent.map((student, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card className="card">
//                 <Card.Img variant="top" src={student.image} alt={`${student.name}`} className="card-img" />
//                 <Card.Body className="card-body">
//                   <Card.Title>{student.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{student.description}</Card.Subtitle>
//                   <Card.Text>
//                     Course: {student.description}
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

// export default StudentPage;
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Card } from 'react-bootstrap';
// import './StudentPage.css';
// import stu1 from '../assets/stu1.jpg';
// import stu2 from '../assets/stu2.jpg';
// import stu3 from '../assets/stu3.jpg';
// import stu4 from '../assets/stu4.jpg';
// import stu5 from '../assets/stu5.jpg';
// // ... other student images
// import alm1 from '../assets/alm1.jpg';
// import alm2 from '../assets/alm2.jpg';
// import alm3 from '../assets/alm3.jpg';
// import alm4 from '../assets/alm4.jpg';
// import alm5 from '../assets/alm5.jpg';
// // ... other alumni images

// const students = [
//   { name: 'Aarav Gupta', image: stu1, skills: ['python', 'machine learning'], interests: ['AI', 'data science'], location: 'NY' },
//   { name: 'Ishita Mehra', image: stu2, skills: ['javascript', 'web development'], interests: ['frontend', 'UX'], location: 'CA' },
//   { name: 'Rohit Sharma', image: stu3, skills: ['C++','Game design'], interests: ['Game development','ML'], location: 'INDIA' }, // Provide skills and interests
//   { name: 'Neha Patel', image: stu4, skills: ['java','deep learning'], interests: ['data science','AI'], location: 'NZ' },
//   { name: 'Karan Singh', image: stu5, skills: ['python','Machine learning'], interests: ['AI','NLP'], location: 'EUROPE' },
// ];

// const alumniData = [
//   { name: 'John Doe', image: alm1, skills: ['python', 'machine learning'], interests: ['AI', 'data science'], location: 'NY', mentorship: true },
//   { name: 'Jane Smith', image: alm2, skills: ['javascript', 'data science'], interests: ['AI', 'deep learning'], location: 'CA', mentorship: true },
//   { name: 'Robert Brown', image: alm3, skills: ['C++','Game design'], interests: ['Game development','ML'], location: 'TX' },
//   { name: 'Lisa Johnson', image: alm4, skills: ['data science','deep learning'], interests: ['AI','ML'], location: 'FL' },
//   { name: 'Michael Green', image: alm5, skills: ['java','deep learning'], interests: ['AI','NLP'], location: 'IL' },
//   // ... other alumni
// ];

// // Matching logic
// const calculateMatchingScore = (student, alumni) => {
//   let score = 0;

//   const matchingSkills = student.skills.filter(skill => alumni.skills.includes(skill));
//   score += matchingSkills.length * 10;

//   const matchingInterests = student.interests.filter(interest => alumni.interests.includes(interest));
//   score += matchingInterests.length * 5;

//   if (student.location === alumni.location) {
//     score += 20;
//   }

//   if (alumni.mentorship) {
//     score += 15;
//   }

//   return Math.min(score, 100);
// };

// const StudentPage = () => {
//   const [search, setSearch] = useState('');
//   const [matches, setMatches] = useState({});

//   useEffect(() => {
//     const results = {};
//     alumniData.forEach(alumni => {
//       students.forEach(student => {
//         const score = calculateMatchingScore(student, alumni);
//         if (score > 0) {
//           if (!results[student.name]) {
//             results[student.name] = [];
//           }
//           results[student.name].push({
//             alumni: alumni.name,
//             score,
//             studentImage: student.image,
//             alumniImage: alumni.image,
//           });
//         }
//       });
//     });

//     Object.keys(results).forEach(student => {
//       results[student] = results[student]
//         .sort((a, b) => b.score - a.score)
//         .slice(0, 5);
//     });

//     setMatches(results);
//   }, []);

//   const filteredStudents = students.filter(student => 
//     student.name.toLowerCase().includes(search.toLowerCase())
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
//         {filteredStudents.length === 0 ? (
//           <Col className="text-center my-4">
//             <h4>NO RESULTS</h4>
//           </Col>
//         ) : (
//           filteredStudents.map((student, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={student.image} alt={student.name} className="student-img" />
//                 <Card.Body>
//                   <Card.Title>{student.name}</Card.Title>
//                   <Card.Text>Skills: {student.skills.join(', ') || 'None'}</Card.Text>
//                   <Card.Text>Interests: {student.interests.join(', ') || 'None'}</Card.Text>
//                   <Card.Text>Location: {student.location || 'Unknown'}</Card.Text>
//                   <h5>Top Matches:</h5>
//                   <ul>
//                     {matches[student.name]?.length > 0 ? (
//                       matches[student.name].map(match => (
//                         <li key={match.alumni}>
//                           <img src={match.alumniImage} alt={match.alumni} className="match-img" />
//                           {match.alumni} - {match.score.toFixed(2)}%
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

// export default StudentPage;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './StudentPage.css';
import stu1 from '../assets/stu1.jpg';
import stu2 from '../assets/stu2.jpg';
import stu3 from '../assets/stu3.jpg';
import stu4 from '../assets/stu4.jpg';
import stu5 from '../assets/stu5.jpg';
import stu6 from '../assets/stu6.jpg';
import stu7 from '../assets/stu7.jpg';
import stu8 from '../assets/stu8.jpg';
import stu9 from '../assets/stu9.jpg';
import stu10 from '../assets/stu10.jpg';
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

// Example images for students
const studentImages = {
  'Aarav Gupta': stu1,
  'Ishita Mehra': stu2,
  'Rohit Sharma': stu3,
  'Neha Patel': stu4,
  'Karan Singh': stu5,
  'Anjali Rao': stu6,
  'Rahul Verma': stu7,
  'Priya Desai': stu8,
  'Sahil Jain': stu9,
  'Sneha Kapoor': stu10

  // Add more mappings here
};
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
  // Add more alumni images as needed
};


const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [matches, setMatches] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        try {
            const studentResponse = await fetch('/students.json');
            const studentsData = await studentResponse.json();
            console.log("Fetched Students:", studentsData); // Add this line
            setStudents(studentsData.students); // Assuming your JSON has a 'students' key

            const matchResponse = await fetch('http://127.0.0.1:5000/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ students: studentsData.students }), // Send only students data
            });

            const matchData = await matchResponse.json();
            console.log("Match Data:", matchData); // Add this line
            setMatches(matchData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);


  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredStudents.length === 0 ? (
          <Col className="text-center my-4">
            <h4>NO RESULTS</h4>
          </Col>
        ) : (
          filteredStudents.map((student, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={studentImages[student.name]} alt={student.name} />
                <Card.Body>
                  <Card.Title>{student.name}</Card.Title>
                  {/* Display top matches */}
                  <h5>Top Matches:</h5>
                  <ul>
                    {matches[student.name]?.map(match => (
                      <li key={match.alumni}>
                        <img src={alumniImages[match.alumni]} alt={match.alumni} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                        {match.alumni} - {match.score}%
                      </li>
                    )) || <li>No matches found.</li>}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default StudentPage;
