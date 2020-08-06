import React, { Component } from 'react'
import axios from 'axios';

class Highscore extends Component {
    state = {
        topTen: []
    }

    // componentDidMount() {
    //     this.checkLogin()
    // }

    // checkLogin = async () => {
    //     await axios.get('/')
    //     .then(res => {
    //         console.log(`User is logged in: ${res.data.loggedIn}`);
    //         console.log(res.data.userId);
    //         this.setState({
    //             loggedIn: res.data.loggedIn
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         console.log("There was an error")
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Your highscore!</h1>
            </div>
        )
    }
}

export default Highscore;
