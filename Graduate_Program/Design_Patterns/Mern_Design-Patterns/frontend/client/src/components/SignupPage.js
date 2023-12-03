import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            userType: userType
        };
        axios.post('http://localhost:5000/users/add', user)
            .then(res => {
                console.log(res.data);
                navigate("/login");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <label>
                    User Type:
                    <input type="text" value={userType} onChange={e => setUserType(e.target.value)} required />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;
