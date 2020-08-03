import React from 'react'

export default function QuizSelection(props) {
    return (
        <div>
            <form name="Select quiz form" onSubmit={props.selectQuizFunc}>
                <label htmlFor="category">Select a category:</label>
                <br />
                <select name="category" id="category" onChange={props.selectCategoryFunc}>
                    <option value="9">General Knowledge</option>
                    <option value="11">Film</option>
                    <option value="22">Geography</option>
                </select>
                <br />
                <label htmlFor="difficulty">Select difficulty:</label>
                <br />
                <select name="difficulty" id="difficulty" onChange={props.selectDifficultyFunc}>
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
