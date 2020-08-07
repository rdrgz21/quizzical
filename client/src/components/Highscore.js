// import React, { Component } from 'react'
// // import axios from 'axios';

// class Highscore extends Component {
//     state = {
//         topTen: []
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Your highscore!</h1>
//             </div>
//         )
//     }
// }

// export default Highscore;

import React, { Component } from 'react';
import axios from 'axios';
import './Highscore.css';
class Highscore extends Component {
  state = {
    rankings: [],
    userRanking: 0,
    loggedIn: false,
    loading: true,
    userId: "",
    userName: "",
    userScore: "",
    userTime: ""
  }
  componentDidMount() {
    this.checkLogin()
  }
  checkLogin = async () => {
    await axios.get('/quiz')
    .then(res => {
      console.log(`User is logged in: ${res.data.loggedIn}`);
      console.log(res.data.userId);
      this.setState({
        loggedIn: res.data.loggedIn,
        loading: false,
        userId: res.data.userId,
        userName: res.data.userName,
        userScore: res.data.userScore,
        userTime: res.data.userTime
      });
    })
    .catch((error) => {
      console.log(error);
      console.log("There was an error")
    });
  }
  
  render() {
        return (
            <React.Fragment>
                {/* { !this.state.loading && !this.state.loggedIn ? 
                    ( */}
                        <div>
                            <h2 id="message"> Hello {this.state.userName}! </h2> 
                            <h3 className="gDetails">Latest score: {this.state.userScore} points!</h3>
                            <h3 className="gDetails">Latest time: {this.state.userTime} seconds!</h3>
                        </div>
                    {/* ) : null 
                } */}
            </React.Fragment>
        );
    }
}
export default Highscore;
