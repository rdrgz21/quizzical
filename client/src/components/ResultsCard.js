import React from 'react';
import './ResultsCard.css';

export default function ResultsCard(props) {
    return (
        <div className="results-card-div">
            <h1>You scored <span className="points">{props.score}/10</span> in <span className="time">{props.time}</span> seconds</h1>

            <form>
                <button className="submit-leaderboard-button" onClick={props.submitToLeaderboardFunc}>Submit to leaderboard</button>
            </form>
        </div>
    )
}
