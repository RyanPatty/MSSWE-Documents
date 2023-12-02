import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserContext from './contexts/UserContext';
import QuizResultsPage from './components/QuizResultsPage';
import CreateQuiz from './components/CreateQuiz';



function App() {
    const [user, setUser] = useState(null);
    
    return (

        <Router>
            <UserContext.Provider value={{ user, setUser }}>

            <Navbar />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/quiz/:id" element={<QuizPage />} />
                    <Route path="/result" element={<ResultPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quizzes/:id/results" element={<QuizResultsPage />} />
                    <Route path="/create-quiz" element={<CreateQuiz />} /> 


                </Routes>

            </UserContext.Provider>
        </Router>
    );
}

export default App;

