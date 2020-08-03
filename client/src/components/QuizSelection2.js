import React, { Component } from 'react';

export default class QuizSelection2 extends Component {

    state = {
        category: 9,
        difficulty: "easy"
    }

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

    // selectQuiz = (event) => {
    //     console.log(event.target.name);
    // }

    render() {
        return (
            <div>
               <form name="Select quiz form" onSubmit={this.props.selectQuizFunc.bind(this.state.category, this.state.difficulty)}>
                <label htmlFor="category">Select a category:</label>
                <br />
                <select name="category" id="category" onChange={this.selectCategory}>
                    <option value="9">General Knowledge</option>
                    <option value="11">Film</option>
                    <option value="22">Geography</option>
                </select>
                <br />
                <label htmlFor="difficulty">Select difficulty:</label>
                <br />
                <select name="difficulty" id="difficulty" onChange={this.selectDifficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form> 
            </div>
        )
    }
}
