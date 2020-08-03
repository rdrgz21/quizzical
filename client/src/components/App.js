import React, { Component } from 'react'
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';

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
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;
