// import React, { useEffect, useState } from 'react';
// import Leaderboard from './Leaderboard';
// import Highscore from './Highscore';
// import './Home.css';

// export default function Home() {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         checkLogin();
//     });

//     const checkLogin = async () => {
//         await axios.get('/quiz')
//         .then(res => {
//             console.log(`User is logged in: ${res.data.loggedIn}`);
//             console.log(res.data.userId);
//             setLoggedIn(true);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.log(error);
//             console.log("There was an error")
//         });
//     }
    
//     return (
//         // 
//         if (loading) {
//             <div>
//                 <div className="flexbox">
//                     <div className="title-box">
//                         <h2 className="lets-get">Let's get...</h2>
//                         <h1 className="quizzical-title">Quizzical!</h1>
//                     </div>
//                     <div className="bottom-container">
//                         <Highscore />
//                         <br />
//                         <Leaderboard />
//                     </div>
//                 </div>
//             </div>
//         } else {
//             return null;
//         }
//         // ) : null}
//     )
// }

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

