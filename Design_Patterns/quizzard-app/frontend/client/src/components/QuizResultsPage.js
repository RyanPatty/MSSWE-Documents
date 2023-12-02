import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizResultsPage = () => {
    const [results, setResults] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/quizzes/${id}/results`)
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    return (
        <div>
            <h1>Quiz Results</h1>
            {/* Display results here */}
        </div>
    );
};

export default QuizResultsPage;
