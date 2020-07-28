import React from "react";
import "./App.css";
import axios from 'axios';
import qCard from './qCard';

import React, { Component } from 'react'

class App2 extends Component {
    state ={
        question: []
    }

    createQuestion = (quizDatum, index) => {
        console.log("Extracting questions");
        return (
            <qCard
            text={quizDatum.question}
            key={index} />
        )
    }
    
    getApi = async () => {
    
        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
        console.log(res.data);

        let quizData = res.data.results;

        quizData.map(createQuestion)
    };
    render() {
    
        return (
            <div>
                <h1>Hola from React!</h1>
            </div>
        )
    }
}

export default App2;