import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    state = {
        inputUsername: "",
        inputEmailAddress: "",
        inputPassword: "",
        message: ""
    }

    recordUsername = (event) => {
        this.setState({
            inputUsername: event.target.value
        })
    }

    recordEmail = (event) => {
        this.setState({
            inputEmailAddress: event.target.value
        })
    }

    recordPassword = (event) => {
        this.setState({
            inputPassword: event.target.value
        })
    }

    submitForm = async (event) => {
        event.preventDefault();
        console.log("Submitting form");
        // console.log(this.state.inputUsername);
        // console.log(this.state.inputEmailAddress);
        // console.log(this.state.inputPassword);
        this.loginUser();
    }

    loginUser = async () => {
        console.log("Attemping login");

        const userDetails = {
            name: this.state.inputUsername,
            email: this.state.inputEmailAddress,
            password: this.state.inputPassword
        }

        await axios.post("/login", userDetails)
        .then(res => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
            console.log("There was an error");
        });
    }




    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                    <input onChange={this.recordUsername} value={this.state.inputUsername} type="string" placeholder="Username..." name="userName"/><br />
                    <input onChange={this.recordEmail} value={this.state.inputEmailAddress} type="email" placeholder="Email..." name="userEmail" /><br />
                    <input onChange={this.recordPassword} value={this.state.inputPassword} type="password" placeholder="Password..." name="userPassword"/><br />
                    <button type="submit">Login</button>

                </form>
        </div>
    )
}
}