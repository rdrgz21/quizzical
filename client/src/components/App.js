import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import QCard from './QCard';

<<<<<<< HEAD
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



    function savingAnswers(){
    
    const randomiseAnswers = quizData && quizData.map( (quizDatum, index) => {
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
=======
class App extends Component {
    state = {
        quizData: [],
        randomAnswers: [],
        userAnswer: null
    }
>>>>>>> fec2358571f015b30327966a6a02c62399259b16

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

    getApi = async () => {

        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
        console.log(`Here is the quizData: ${res.data}`);
        this.setState({
            quizData: res.data.results
        }, () => {
            console.log(`Here is the loaded quiz data: ${this.state.quizData}`);
            this.saveAnswers();
        });
    };

    componentDidMount() {
        this.getApi();
    }

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

    onValueChange = (event) => {
        console.log(event.target.value);
        this.setState({
            userAnswer: event.target.value
        });
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userAnswer);
    }

    render() {
        let displayCards = this.state.quizData.length > 0 && this.state.quizData.map( (quizDatum, index) => {

            return (
                  <QCard 
                    key={index} 
                    qNo={index+1} 
                    text={quizDatum.question}
                    answer1={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][0]}
                    answer2={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][1]}
                    answer3={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][2]}
                    answer4={this.state.randomAnswers && this.state.randomAnswers[index] && this.state.randomAnswers[index][3]}
                    formSubmitFunc={this.formSubmit} 
                    onValueChangeFunc={this.onValueChange}
                  />
                )
          });
        return (
            <div className="quiz-body">
                <h1>Welcome to the quiz!!</h1>

                { displayCards }
      
            </div>
        )
    }
}

export default App;
