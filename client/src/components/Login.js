import React, { Component } from 'react';
// express = require('express')
// router = express.Router();


export default class Login extends Component {
    state = {
        test: "Bananas"
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="string" placeholder="Username..." name="userName"/><br />
                    <input type="email" placeholder="Email..." name="userEmail" /><br />
                    <input type="password" placeholder="Password..." name="userPassword"/><br />
                    <button type="submit">Login</button>

                </form>
        </div>
    )
}
}