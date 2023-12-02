import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function Navbar() {
    const { user, setUser } = useContext(UserContext);

    const style = {
        margin: '10px',
        textDecoration: 'none',
        color: 'blue'
    };

    function handleLogout() {
        // In a real app, you'd also want to invalidate the user's token on the server side
        setUser(null);
    }

    return (
        <nav>
            <Link to="/" style={style}>Home</Link>
            {user ? (
                <>
                    {user.isAdmin && 
                        <>
                            <Link to="/admin" style={style}>Admin</Link>
                            <Link to="/create-quiz" style={style}>Create Quiz</Link>
                        </>
                    }
                    <button onClick={handleLogout} style={style}>Log out</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={style}>Log in</Link>
                    <Link to="/signup" style={style}>Sign up</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
