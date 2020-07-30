import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QCard from './QCard';

function App() {

  let [quizData, loadQuizData] = useState([]);

  let [userAnswer, setUserAnswer] = useState(null);

  // console.log(`This is the initial quizData: ${quizData}`);

  useEffect( () => {
    getApi();

  }, [])
  
  const createQuestionCard = (quizDatum, index) => {
    // console.log("Extracting questions");
    // console.log(quizDatum.question);

    let correctAnswer = [quizDatum.correct_answer];
    // console.log(`The correct answer is ${correctAnswer}`);
    let incorrectAnswers = quizDatum.incorrect_answers;
    // console.log(`The incorrect answers are ${incorrectAnswers}`);
    let allAnswers = correctAnswer.concat(incorrectAnswers);
    // console.log(allAnswers);

    // Shuffle function

    let randomiseAnswers = (array) => {
      for (let i = 0; i < 10; i++) {
          for (let i = array.length - 1; i > 0; i--) {
              let newIndex = Math.floor(Math.random() * (i + 1));
              let temp = array[i];
              array[i] = array[newIndex];
              array[newIndex] = temp;
          }
          return array
      };
    };

    let randomisedAnswers = randomiseAnswers(allAnswers);

    // console.log(randomisedAnswers);

    // Submit function


    // const submitAnswer = (event) => {
    //   setUserAnswer(event.target.value), () => {
    //     console.log(userAnswer);
    //   }

      
    // }

    // const submitAnswer = (event) => {
    //   console.log(`ANSWER SUBMITTED: ${event.target.value}`);
    //   setUserAnswer(event.target.value);
    //   // console.log(userAnswer);
    // }

    const onValueChange = (event) => {
      setUserAnswer(event.target.value);
    }

    const formSubmit = (event) => {
      event.preventDefault();
      console.log(userAnswer);
    }

    return (
      <QCard 
        key={index} 
        qNo={index+1} 
        text={quizDatum.question}
        answer1={randomisedAnswers[0]}
        answer2={randomisedAnswers[1]}
        answer3={randomisedAnswers[2]}
        answer4={randomisedAnswers[3]}
        formSubmitFunc={formSubmit} 
        onValueChangeFunc={onValueChange}
      />
    )
  }

  const getApi = async () => {

    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
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
