import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Register.css';

class Register extends Component {
    state = {
        inputUsername: "",
        inputEmailAddress: "",
        inputPassword: "",
        inputPassword2: "",
        message: "",
        registered: false,
        loggedIn: false
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

    recordPassword2 = (event) => {
        this.setState({
            inputPassword2: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log("Submitting form");
        this.registerUser();
    }

    registerUser = async () => {
        console.log("Attempting to register user");
        
        const userDetails = {
            name: this.state.inputUsername,
            email: this.state.inputEmailAddress,
            password: this.state.inputPassword
        }

        if (this.state.inputPassword !== this.state.inputPassword2) {
            this.setState({
                message: "Please ensure your passwords match"
            })
        } else if (this.state.inputPassword === this.state.inputPassword2) {
            await axios.post('/register', userDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    message: res.data,
                    registered: true
                });
            }).catch((error) => {
                console.log(error)
                console.log("There was an error");
            });
        }
        this.setState({ 
            inputUsername: '', 
            inputEmailAddress: '',
            inputPassword: '',
            inputPassword2: '' 
        })
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
                loggedIn: res.data.loggedIn
            });
        })
        .catch((error) => {
            console.log(error);
            console.log("There was an error")
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/quiz" />
        }
        if (this.state.registered) {
            return <Redirect to="/login" />
        }
        return (
            <React.Fragment>
                <div className="register-flexbox">
                    <div className="register-container">
                        <h1>Register</h1>
                        <form onSubmit={this.submitForm}>
                            <label className="register-label" htmlFor="userName">Username</label>
                            <br />
                            <input className="register-input" onChange={this.recordUsername} type="text" name="userName" value={this.state.inputUsername} id="userName" required/>
                            <br />
                            <label className="register-label" htmlFor="userEmail">Email Address</label>
                            <br />
                            <input className="register-input" onChange={this.recordEmail} type="email" name="userEmail" value={this.state.inputEmailAddress} id="userEmail" required/>
                            <br />
                            <label className="register-label" htmlFor="userPassword">Password</label>
                            <br />
                            <input className="register-input" onChange={this.recordPassword} type="password" name="userPassword" value={this.state.inputPassword} id="userPassword" required/>
                            <br />
                            <label className="register-label" htmlFor="userPassword2">Re-enter Password</label>
                            <br />
                            <input className="register-input" onChange={this.recordPassword2} type="password" name="userPassword2" id="userPassword2" value={this.state.inputPassword2} required/>
                            <br />
                            <button id="register-button" type="submit">Register</button>
                        </form>
                        {this.state.message ? <h4 className="registration-form-text message">{this.state.message}</h4> : null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register;
