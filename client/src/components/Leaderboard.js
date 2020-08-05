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
                topTen: res.data
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
            return ( <li key={index}>{user.name}, {user.email}</li> )
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
