import React from 'react';
import Leaderboard from './Leaderboard';
import Highscore from './Highscore';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="flexbox">
                <div className="title-box">
                    <h2 className="lets-get">Let's get...</h2>
                    <h1 className="quizzical-title">Quizzical!</h1>
                </div>
                <div className="bottom-container">
                    <Highscore />
                    <br />
                    <Leaderboard />
                </div>
            </div>
            
        </div>
    )
}
