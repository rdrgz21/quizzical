import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    state = {
        inputEmailAddress: "",
        inputPassword: "",
        message: "",
        loggedIn: false
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
            email: this.state.inputEmailAddress,
            password: this.state.inputPassword
        }

        await axios.post("/login", userDetails)
        .then(res => {
            console.log(res.data.message)
            this.setState({
                loggedIn: res.data.loggedIn,
                message: res.data.message
            })
        })
        .catch((error) => {
            console.log(error)
            console.log("There was an error");
        });
    }




    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/quiz" />
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                   
                    <input onChange={this.recordEmail} value={this.state.inputEmailAddress} type="email" placeholder="Email..." name="userEmail" /><br />
                    <input onChange={this.recordPassword} value={this.state.inputPassword} type="password" placeholder="Password..." name="userPassword"/><br />
                    <button type="submit">Login</button>
                </form>
                {this.state.message === "Login unsuccessful" ? (<h4>Try to register instead</h4>) : null}
        </div>
    )
}
}