import React from 'react'

export default function ResultsCard(props) {
    return (
        <div>
            <h1>Your score is {props.score}/10 and your time was {props.time}</h1>

            <form>
                <button onClick={props.submitToLeaderboardFunc}>Submit to Leaderboard!!</button>
            </form>
        </div>
    )
}
