from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np


app = Flask(__name__)
CORS(app, resources={r"/match": {"origins": "http://localhost:5173"}})
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Load students and alumni data from JSON files
students = [
   { 
    "name": "Aarav Gupta",
    "skills": ["python", "machine learning"],
    "interests": ["AI", "data science"],
    "location": "NY"
   },
   { 
    "name": "Ishita Mehra",
    "skills": ["javascript", "web development"],
    "interests": ["frontend", "UX"],
    "location": "CA"
   },
   { 
    "name": "Rohit Sharma", 
    "skills": ["C++","Game design"], 
    "interests": ["Game development","ML"], 
    "location": "INDIA" 
   }, 
   { 
    "name": "Neha Patel",  
    "skills": ["java","deep learning"], 
    "interests": ["data science","AI"], 
    "location": "NZ" 
   },
   { 
    "name": "Karan Singh", 
    "skills": ["python","Machine learning"], 
    "interests": ["AI","NLP"], 
    "location": "EUROPE" 
   },
   { 
    "name": "Anjali Rao",
    "skills": ["Python", "Data Analysis", "Machine Learning"],
    "interests": ["Artificial Intelligence", "Data Science"],
    "location": "Mumbai, India" 
       
    },
   { 
    "name": "Rahul Verma",  
    "skills": ["Java", "Spring Framework", "Microservices"],
    "interests": ["Web Development", "Cloud Computing"],
    "location": "Bangalore, India"    
    },
   { 
    "name": "Priya Desai", 
    "skills": ["JavaScript", "React", "Node.js"],
    "interests": ["Frontend Development", "UI/UX Design"],
    "location": "Pune, India"    
    },
   { 
    "name": "Sahil Jain",  
    "skills": ["C++", "Game Development", "Unity"],
    "interests": ["Gaming", "Game Design"],
    "location": "Delhi, India"    
    },
   { 
    "name": "Sneha Kapoor",  
    "skills": ["HTML", "CSS", "Web Design"],
    "interests": ["Graphic Design", "Digital Marketing"],
    "location": "Chennai, India"   
    }
  ]
alumni = [ 
    { 
        "name": "John Doe",
        "skills": ["python", "data science"],
        "interests": ["AI", "deep learning"],
        "location": "NY",
        "mentorship": True
    },
    { 
        "name": "Jane Smith",
        "skills": ["javascript", "React"],
        "interests": ["web development", "frontend"],
        "location": "CA",
        "mentorship": True
    },
    { 
        "name": "Robert Brown", 
        "skills": ["C++","Game design"], 
        "interests": ["Game development","ML"], 
        "location": "TX" 
        
    },
    { 
        "name": "Lisa Johnson",  
        "skills": ["data science","deep learning"], 
        "interests": ["AI","ML"], 
        "location": "FL"
         
    },
    { 
        "name": "Michael Green", 
        "skills": ["java","deep learning"], 
        "interests": ["AI","NLP"], 
        "location": "IL" 
    },
    { 
        "name": "Emily White",
        "skills": ["Python", "Data Visualization", "Machine Learning"],
        "interests": ["Data Science", "Artificial Intelligence"],
        "location": "Seattle, WA",
        "mentorship": True
    },
    { 
        "name": "William Black",
        "skills": ["Java", "Android Development", "Spring Boot"],
        "interests": ["Mobile App Development", "Cloud Computing"],
        "location": "Austin, TX"
    },
    { 
        "name": "Jessica Blue",
        "skills": ["JavaScript", "React", "Node.js"],
        "interests": ["Frontend Development", "Web Applications"],
        "location": "San Francisco, CA"
    },
    { 
        "name": "Chris Gray",
        "skills": ["C#", ".NET", "Web Development"],
        "interests": ["Software Engineering", "Cloud Solutions"],
        "location": "New York, NY",
        "mentorship": True
    },
    { 
        "name": "Sophia Yellow",
        "skills": ["HTML", "CSS", "UI/UX Design"],
        "interests": ["Graphic Design", "User Experience"],
        "location": "Los Angeles, CA"
    },
    { 
        "name": "Ethan Green",
        "skills": ["C++", "Game Development", "Unity"],
        "interests": ["Gaming", "Interactive Media"],
        "location": "Chicago, IL"
    },
    { 
        "name": "Olivia Blue",
        "skills": ["PHP", "MySQL", "Web Development"],
        "interests": ["Full Stack Development", "Digital Marketing"],
        "location": "Miami, FL",
        "mentorship": True
    }
  ]

def get_embedding(text):
    return model.encode(text)

def vectorize_profiles(profiles):
    skill_embeddings = []
    interest_embeddings = []
    
    for profile in profiles:
        skills_text = " ".join(profile['skills'])
        interests_text = " ".join(profile['interests'])
        skill_embeddings.append(get_embedding(skills_text))
        interest_embeddings.append(get_embedding(interests_text))
    return np.array(skill_embeddings), np.array(interest_embeddings)

def calculate_weighted_similarity(student, alum, skill_vectors, interest_vectors, alumni, skill_weight=0.7, interest_weight=0.3):
    student_skill_vector = get_embedding(" ".join(student['skills']))
    student_interest_vector = get_embedding(" ".join(student['interests']))
    
    alum_index = alumni.index(alum)  # Access alumni correctly
    
    skill_similarity = cosine_similarity([student_skill_vector], [skill_vectors[alum_index]])[0][0]
    interest_similarity = cosine_similarity([student_interest_vector], [interest_vectors[alum_index]])[0][0]
    
    weighted_similarity = (skill_similarity * skill_weight) + (interest_similarity * interest_weight)
    
    # Location and mentorship boosts
    if student['location'] == alum['location']:
        weighted_similarity += 0.1
    if alum.get('mentorship', False):
        weighted_similarity += 0.1
    
    return round(min(weighted_similarity * 100, 100), 2)

def match_students_to_alumni(students, alumni, skill_vectors, interest_vectors):
    matches = {}
    
    for student in students:
        student_matches = []
        
        for alum in alumni:
            score = calculate_weighted_similarity(student, alum, skill_vectors, interest_vectors, alumni)  # Pass alumni list here
            student_matches.append({'alumni': alum['name'], 'score': score})
        
        sorted_matches = sorted(student_matches, key=lambda x: x['score'], reverse=True)
        matches[student['name']] = sorted_matches[:5]
    
    return matches

@app.route('/match', methods=['POST'])
def match():
     # Extract the list of alumni profiles
    data = request.json
    print("Data received:", data)
    
    if 'students' not in data:
        return jsonify({'error': 'No students data provided'}), 400
    
    skill_vectors, interest_vectors = vectorize_profiles(alumni)  # Pass correct alumni list to vectorize
    results = match_students_to_alumni(data['students'], alumni, skill_vectors, interest_vectors)
    print("Matching results:", results)
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
