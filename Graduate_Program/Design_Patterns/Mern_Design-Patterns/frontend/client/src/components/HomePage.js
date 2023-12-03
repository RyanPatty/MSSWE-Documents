import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/quizzes')
            .then(res => setQuizzes(res.data))
            .catch(err => console.error(err));
    }, []);
    

    return (
        <div>
            <h1>Welcome to Quizzard!</h1>
            <h2>Available Quizzes:</h2>
            {quizzes.map((quiz) => (
                <Link key={quiz._id} to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
            ))}
        </div>
    );
};

export default HomePage;
