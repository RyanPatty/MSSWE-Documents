import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password,
        };
        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                console.log(res.data);
                setUser(res.data);  // Here we are setting the user context with the data returned from server
                navigate("/");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
