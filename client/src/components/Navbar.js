import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to = "/login">Login</Link>
                <Link to = "/register">Register</Link>
                <Link to = "/quiz">Quiz</Link>
                <Link to = "/leaderboard">Leaderboard</Link>
            </nav>
        </div>
    )
}
