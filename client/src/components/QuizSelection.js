import React from 'react'

export default function QuizSelection(props) {
    return (
        <div>
            <form name="Select quiz form" onSubmit={props.selectQuizFunc}>
                <label htmlFor="category">Select a category:</label>
                <br />
                <select name="category" id="category" onChange={props.selectCategoryFunc}>
                    <option value="9">General Knowledge</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="13">Musicals & Theatres</option>
                    <option value="14">Television</option>
                    <option value="15">Video Games</option>
                    <option value="16">Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Computers</option>
                    <option value="19">Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Comics</option>
                    <option value="30">Gadgets</option>
                    <option value="31">Japanese Anime & Manga</option>
                    <option value="32">Cartoon & Animations</option>
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
