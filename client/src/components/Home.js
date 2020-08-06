import React from 'react';
import Leaderboard from './Leaderboard';
import Highscore from './Highscore';



export default function Home() {
    return (
        <div>
            <h1> Welcome to the Homepage! </h1>
            
            <Highscore />

            <Leaderboard />
        </div>
    )
}
