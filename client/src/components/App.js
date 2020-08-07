import React, { Component } from 'react'
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Login from './Login';
import Register from './Register';

class App extends Component {
    state = {
       
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path = "/" render = {() => <Home />} />
                        <Route exact path = "/quiz" component = {Quiz} />
                        <Route exact path = "/login" component = {Login} />
                        <Route exact path = "/register" component = {Register} />
                        <Route exact path = "/logout" component = {Home} />
            
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;
