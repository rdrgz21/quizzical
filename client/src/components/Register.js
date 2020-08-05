import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    state = {
        inputUsername: "",
        inputEmailAddress: "",
        inputPassword: "",
        inputPassword2: "",
        message: "",
        registered: false
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

    render() {
        if (this.state.registered) {
            return <Redirect to="/login" />
        }
        return (
            <React.Fragment>
                <h1>Register Page</h1>
                <div className="registration-form-container">
                    <h3 className="registration-form-text heading">Register</h3>
                    <form onSubmit={this.submitForm}>
                        <label htmlFor="userName">Username</label>
                        <br />
                        <input onChange={this.recordUsername} type="text" name="userName" value={this.state.inputUsername} id="userName" required/>
                        <br />
                        <label htmlFor="userEmail">Email Address</label>
                        <br />
                        <input onChange={this.recordEmail} type="email" name="userEmail" value={this.state.inputEmailAddress} id="userEmail" required/>
                        <br />
                        <label htmlFor="userPassword">Password</label>
                        <br />
                        <input onChange={this.recordPassword} type="password" name="userPassword" value={this.state.inputPassword} id="userPassword" required/>
                        <br />
                        <label htmlFor="userPassword2">Re-enter Password</label>
                        <br />
                        <input onChange={this.recordPassword2} type="password" name="userPassword2" id="userPassword2" value={this.state.inputPassword2} required/>
                        <br />
                        <button id="register-button" type="submit">Register</button>
                    </form>
                    {this.state.message ? <h4 className="registration-form-text message">{this.state.message}</h4> : null}
                </div>
            </React.Fragment>
        )
    }
}

export default Register;
