import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const AdminPage = () => {
    const { user } = useContext(UserContext);

    // Display different messages depending on whether the user is an admin
    if (user && user.isAdmin) {
        return <div>Welcome, {user.name}. Here, you can manage the quizzes.</div>;
    } else {
        return <div>Sorry, you are not authorized to access this page.</div>;
    }
};

export default AdminPage;