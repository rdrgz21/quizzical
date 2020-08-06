import React, { Component } from 'react'
import axios from 'axios';
import './Leaderboard.css';

class Leaderboard extends Component {
    state = {
        topTen: []
    }
    getTopTen = async () => {
        // const res = 
        await axios.get('/leaderboard')
        .then(res => {
            console.log(res.data);
            this.setState({
                topTen: res.data.slice(0, 10)
            }, () => {
                console.log(this.state.topTen);
            });
        }).catch((error) => {
            console.log(error);
            console.log("There was an error");
        });

        // console.log(`Here is the leaderboard data ${res}`);
    };

    componentDidMount() {
        this.getTopTen();
    }

    render() {
        let userListItems = this.state.topTen.length > 0 && this.state.topTen.map((user, index) => {
        return ( <li key={index}>{user.name} got a score of {user.score} in {user.time} seconds</li> )
        })
        return (
            <div>
                <ol>
                    {userListItems}
                </ol>
            </div>
        )
    }
}
export default Leaderboard;
