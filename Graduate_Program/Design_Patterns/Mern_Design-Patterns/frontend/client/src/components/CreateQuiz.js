import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

const CreateQuiz = () => {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([{ questionText: '', options: [''] }]);
    const { user } = useContext(UserContext);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleQuestionChange = (e, index) => {
        const newQuestions = [...questions];
        newQuestions[index].questionText = e.target.value;
        setQuestions(newQuestions);
    }

    const handleOptionChange = (e, questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = e.target.value;
        setQuestions(newQuestions);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let questionIds = [];

        // Loop through questions
        for(let i=0; i<questions.length; i++) {
            let optionIds = [];
            // Loop through options for each question
            for(let j=0; j<questions[i].options.length; j++) {
                let option = {
                    optionText: questions[i].options[j],
                    question: ""  // We don't have a question id yet, so we send an empty string
                };
                // Create option and store its id
                let optionRes = await axios.post('http://localhost:5000/options/add', option);
                optionIds.push(optionRes.data._id);
            }
            // Create question with option ids and store its id
            let question = {
                questionText: questions[i].questionText,
                options: optionIds
            };
            let questionRes = await axios.post('http://localhost:5000/questions/add', question);
            questionIds.push(questionRes.data._id);
        }

        // Create quiz with question ids
        const quiz = {
            title: title,
            questions: questionIds,
            createdBy: user.email,
        };
        axios.post('http://localhost:5000/quizzes/add', quiz)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }
    
    
    return (
        <div>
            <h1>Create Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} required />
                </label>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <label>
                            Question:
                            <input type="text" value={question.questionText} onChange={(e) => handleQuestionChange(e, questionIndex)} required />
                        </label>
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex}>
                                Option:
                                <input type="text" value={option} onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)} required />
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit">Create Quiz</button>
            </form>
        </div>
    );
};

export default CreateQuiz;