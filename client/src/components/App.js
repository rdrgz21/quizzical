import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QCard from './QCard';

function App() {

  console.log("Refreshing comp");

  let [quizData, loadQuizData] = useState([]);
  let [randomAnswers, setRandomAnswers] = useState([]);
  let [userAnswer, setUserAnswer] = useState(null);

  // console.log(`This is the initial quizData: ${quizData}`);

  useEffect( () => {
    getApi();
    savingAnswers();
  }, [])

  const getApi = async () => {

    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
    //console.log(res.data);

    loadQuizData(res.data.results);
  };
  console.log(quizData);


  
   async function savingAnswers( ){
    
    const randomiseAnswers = await quizData && quizData.map( (quizDatum, index) => {
      // console.log("Extracting questions");
      // console.log(quizDatum.question);

      let correctAnswer = [quizDatum.correct_answer];
      // console.log(`The correct answer is ${correctAnswer}`);
      let incorrectAnswers = quizDatum.incorrect_answers;
      // console.log(`The incorrect answers are ${incorrectAnswers}`);
      let allAnswers = correctAnswer.concat(incorrectAnswers);
      // console.log(allAnswers);


      // Array Shuffle function

        for (let i = 0; i < 10; i++) {
            for (let i = allAnswers.length - 1; i > 0; i--) {
                let newIndex = Math.floor(Math.random() * (i + 1));
                let temp = allAnswers[i];
                allAnswers[i] = allAnswers[newIndex];
                allAnswers[newIndex] = temp;
            }
        };

        return allAnswers;

    });

    setRandomAnswers();

      // setRandomAnswers(randomiseAnswers);
    
  }
  

  //console.log( randomiseAnswers ); //logging randomised answers array


    const onValueChange = (event) => {
      event.preventDefault();
      setUserAnswer(event.target.value);
      console.log(event.target.value);
    }

    const formSubmit = (event) => {
      event.preventDefault();
      console.log(userAnswer);
    }


  const displayCards = quizData && quizData.map( (quizDatum, index) => {
    return (
          <QCard 
            key={index} 
            qNo={index+1} 
            text={quizDatum.question}
            answer1={randomAnswers && randomAnswers[index] && randomAnswers[index][0]}
            answer2={randomAnswers && randomAnswers[index] && randomAnswers[index][1]}
            answer3={randomAnswers && randomAnswers[index] && randomAnswers[index][2]}
            answer4={randomAnswers && randomAnswers[index] && randomAnswers[index][3]}
            formSubmitFunc={formSubmit} 
            onValueChangeFunc={onValueChange}
          />
        )
  });

    console.log(randomAnswers);
  return (
    <div className="quiz-body">
      <h1>Welcome to the quiz!!</h1>

      { displayCards }
      
    </div>
  );
}

export default App;
