import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Option from './Option';

const QuizPage = () => {
    const [quiz, setQuiz] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/quizzes/${id}`)
            .then(res => setQuiz(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption.isCorrect) {
            navigate("/quiz-results", { state: { result: "Success!" } });
        } else {
            navigate("/quiz-results", { state: { result: "Try again..." } });
        }
    };

    return (
        <div>
            <h2>Quiz</h2>
            {quiz && <p>{quiz.title}</p>}
            <form onSubmit={handleSubmit}>
                {quiz && quiz.questions.map(question =>
                    <div key={question._id}>
                        <p>{question.questionText}</p>
                        {question.options.map(option =>
                            <Option key={option._id} option={option} setSelectedOption={setSelectedOption} />
                        )}
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuizPage;
