import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function QuestionPage() {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/quizzes/${quizId}`)
            .then(response => setQuiz(response.data))
            .catch(error => console.error('There was an error!', error));
    }, [quizId]);

    if (!quiz) return 'Loading...';

    const question = quiz.questions[currentQuestionIndex];

    function handleNextQuestion() {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // navigate to ResultPage when done
            history.push(`/results/${quizId}`);
        }
    }

    return (
        <div>
            <h1>{quiz.title}</h1>
            <h2>{question.questionText}</h2>
            {/* display options here */}
            <button onClick={handleNextQuestion}>Next question</button>
        </div>
    );
}

export default QuestionPage;
