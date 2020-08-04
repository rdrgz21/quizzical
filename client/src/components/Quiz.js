import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import QCard from './QCard';
import ResultsCard from './ResultsCard';
import QuizSelection from './QuizSelection';

class Quiz extends Component {
    state = {
        quizSelected: false,
        quizData: [],
        questionsAnswered: 0,
        correctAnswerCount: 0,
        randomAnswers: [],
        userAnswer: null,
        category: 9,
        difficulty: "easy",
        seconds: 0,
        message: ""
    }

    // Choosing category and difficulty

    selectCategory = (event) => {
        console.log(event.target.value);
        this.setState({
            category: event.target.value
        })
    }

    selectDifficulty = (event) => {
        console.log(event.target.value);
        this.setState({
            difficulty: event.target.value
        })
    }

    selectQuiz = (event) => {
        event.preventDefault();
        this.getApi();
        this.startTimer();
    }

    // Timer functions

    startTimer = () => {
        console.log("Starting timer");
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }))
            // console.log(this.state.count)
        }, 1000)
    }

    stopTimer = () => {
        clearInterval(this.myInterval)
    }

    // Saving answers from API to randomAnswers

    // Shuffling answers

    shuffle = (array) => {
        console.log('Shuffling array');
        for (let i = 0; i < 1000; i++) {
          let location1 = Math.floor((Math.random()*array.length));
          let location2 = Math.floor((Math.random()*array.length));
          let tmp = array[location1];
          array[location1] = array[location2];
          array[location2] = tmp;
        }
    };
    
    saveAnswers = (index) => {
        if (this.state.quizData.length > 0) {
            console.log('Quiz Data exists');
            const shuffledAnswers = this.state.quizData.map((quizDatum) => {

                console.log("Extracting questions");
                
                let correctAnswer = [quizDatum.correct_answer];
                let incorrectAnswers = quizDatum.incorrect_answers;
                let allAnswers = correctAnswer.concat(incorrectAnswers);

                console.log(`Here is the unshuffled array: ${allAnswers}`);
                console.log(typeof allAnswers);
                console.log(allAnswers);
                this.shuffle(allAnswers);
                console.log(`Here is the shuffled array: ${allAnswers}`);

                return allAnswers;
            });
            console.log(shuffledAnswers);
            this.setState({
                randomAnswers: shuffledAnswers
            });
        } else {
            console.log('Quiz data does not exist');
        }
    }

    // Calling API

    getApi = async () => {
        let category = this.state.category;
        let difficulty = this.state.difficulty;

        const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        console.log(`Here is the quizData: ${res.data}`);
        this.setState({
            quizData: res.data.results,
            quizSelected: true
        }, () => {
            console.log(`Here is the loaded quiz data: ${this.state.quizData}`);
            this.saveAnswers();
        });
    };

    // componentDidMount() {
    //     this.getApi();
    // }

    // Radio button form functions

    // Checking if correct answer

    checkAnswer = (inputAnswer, correctAnswer) => {
        console.log(`The user chose ${inputAnswer} and the correct answer was ${correctAnswer}`);
        if (inputAnswer === correctAnswer) {
            console.log("Correct answer chosen");
            this.setState({
                correctAnswerCount: this.state.correctAnswerCount + 1
            }, () => {
                console.log(`Correct answers so far: ${this.state.correctAnswerCount}`);
            })
        } else {
            console.log("Incorrect answer chosen");

        }
    }

    // Selecting option

    onValueChange = (event) => {
        console.log(event.target.value);
        this.setState({
            userAnswer: event.target.value
        });
    }

    // Submitting option

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userAnswer);
        console.log(`This is the question number: ${event.target.name}`);
        this.checkAnswer(this.state.userAnswer, this.state.quizData[event.target.name-1].correct_answer);
        this.setState({
            questionsAnswered: this.state.questionsAnswered < 10 ? this.state.questionsAnswered + 1 : 10
        }, () => {
            console.log(`Questions answered: ${this.state.questionsAnswered}/10`);
            if (this.state.questionsAnswered === 10) {
                this.stopTimer();
            }
        });
    }

    submitToLeaderboard = async (event) => {
        event.preventDefault();
        const scoreAndTime = {
            score: this.state.correctAnswerCount,
            time: this.state.seconds
        }
        await axios.post('/results', scoreAndTime)
            .then(res => {
                console.log(res.data);
                this.setState({
                    message: res.data
                });
            }).catch((error) => {
                console.log(error)
                console.log("There was an error");
            });
        this.setState({ 
            correctAnswerCount: '', 
            questionsAnswered: ''
        })
    }

    render() {
        let displayCards = this.state.quizData.length > 0 && this.state.quizData.map( (quizDatum, index) => {
            if (index === 0) {
                return (
                    <QCard 
                    className="visible-qcard"
                    key={index} 
                    qNo={index+1} 
                    text={quizDatum.question}
                    answer1={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][0]}
                    answer2={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][1]}
                    answer3={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][2]}
                    answer4={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][3]}
                    formSubmitFunc={this.formSubmit} 
                    onValueChangeFunc={this.onValueChange}
                    submitBtnText="Next Question"
                    />
                )
            } else if (index > 0 && index < 9){
                return (
                    <QCard
                    className="invisible-qcard"
                    key={index} 
                    qNo={index+1} 
                    text={quizDatum.question}
                    answer1={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][0]}
                    answer2={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][1]}
                    answer3={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][2]}
                    answer4={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][3]}
                    formSubmitFunc={this.formSubmit} 
                    onValueChangeFunc={this.onValueChange}
                    submitBtnText="Next Question"
                    />
                )
            } else if (index === 9) {
                return (
                    <QCard
                    className="invisible-qcard"
                    key={index} 
                    qNo={index+1} 
                    text={quizDatum.question}
                    answer1={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][0]}
                    answer2={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][1]}
                    answer3={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][2]}
                    answer4={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][3]}
                    formSubmitFunc={this.formSubmit} 
                    onValueChangeFunc={this.onValueChange}
                    submitBtnText="End Quiz"
                    />
                )
            };
        });
        return (
            <div className="quiz-body">
                
                { !this.state.quizSelected ? (
                    <QuizSelection selectCategoryFunc={this.selectCategory} selectDifficultyFunc={this.selectDifficulty} selectQuizFunc={this.selectQuiz} />
                ) : null }
                <h1>Welcome to the quiz!!</h1>
                
                { this.state.quizSelected ? (
                    <div>
                        <p>Demo Timer: {this.state.seconds} </p> 
                        <button onClick={this.startTimer}>To start</button>
                        <button onClick={this.stopTimer}>To stop</button>
                    </div>
                ) : null }

                { this.state.quizSelected && this.state.questionsAnswered >= 0 ? displayCards : null}
                { this.state.questionsAnswered >= 10 ? (
                    <ResultsCard submitToLeaderboardFunc={this.submitToLeaderboard} score={this.state.correctAnswerCount} time={this.state.seconds}/>
                ) : (
                    null
                )}
                <h4>Message: {this.state.message}</h4>
            </div>
        )
    }
}

export default Quiz;
