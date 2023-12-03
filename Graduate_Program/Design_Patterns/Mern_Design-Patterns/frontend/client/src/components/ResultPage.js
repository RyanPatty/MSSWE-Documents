import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ResultPage() {
    const { quizId } = useParams();
    const [score, setScore] = useState(null);

    useEffect(() => {
        // replace this with the actual request to evaluate the quiz
        axios.post(`/quizzes/${quizId}/evaluate`, { answers: []})
            .then(response => setScore(response.data.score))
            .catch(error => console.error('There was an error!', error));
    }, [quizId]);

    if (score === null) return 'Loading...';

    return (
        <div>
            <h1>Your Score</h1>
            <p>You scored {score} out of {/* total number of questions */}!</p>
        </div>
    );
}

export default ResultPage;
