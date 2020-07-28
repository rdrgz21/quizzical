import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import qCard from './qCard';

function App() {

  useEffect( () => {
    getApi();

  }, [])

  const createQuestion = (quizDatum, index) => {
    console.log("Extracting questions");
    return (
      <qCard
        text={quizDatum.question}
        key={index} />
    )
  }

  const getApi = async () => {

    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    console.log(res.data);

    let quizData = res.data.results;

    quizData.map(createQuestion)

    // const res = await axios.get('/results');
    // console.log( res.data );

    // setUserDetails({
    //   name: res.data.name,
    //   city: res.data.city,
    //   age: res.data.age
    // })
  };


  return (
    <div>
      <h1>Hola from React!</h1>
      
    </div>
  );
}

export default App;
