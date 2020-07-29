import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QCard from './QCard';

function App() {

  let [quizData, loadQuizData] = useState([]);

  console.log(`This is the initial quizData: ${quizData}`);

  useEffect( () => {
    getApi();

  }, [])
  
  const createQuestionCard = (quizDatum, index) => {
    console.log("Extracting questions");
    console.log(quizDatum.question);

    return (
      <QCard 
        key={index} 
        qNo={index+1} 
        text={quizDatum.question}
        answer1="Answer 1"
        answer2="Answer 2"
        answer3="Answer 3" 
      />
    )
  }

  const getApi = async () => {

    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    console.log(res.data);

    loadQuizData(res.data.results);
  };

  return (
    <div className="quiz-body">
      <h1>Welcome to the quiz!!</h1>

      {quizData.map(createQuestionCard)}

      

    </div>
  );
}

export default App;
