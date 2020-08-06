import React from 'react';
import './QCard.css';


export default function QCard(props) {
    return (
        <div className="qcard">
            <h2 id="qText">Question {props.qNo}</h2>
            <h2>{props.text}</h2>
            <form name={props.qNo} onSubmit={props.formSubmitFunc}>
                <div className="option">
                    <input
                        type="radio" 
                        id="answer1" 
                        name="questionAnswer"
                        // checked= "checked" 
                        value={props.answer1}
                        onChange={props.onValueChangeFunc}
                    />
                    <label className="btnStyle" htmlFor="answer1" >{props.answer1}</label>
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        id="answer2" 
                        name="questionAnswer" 
                        value={props.answer2}
                        onChange={props.onValueChangeFunc}
                    />
                    <label className="btnStyle" htmlFor="answer2" >{props.answer2}</label>
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        id="answer3" 
                        name="questionAnswer" 
                        value={props.answer3}
                        onChange={props.onValueChangeFunc} 
                    />
                    <label className="btnStyle" htmlFor="answer3" >{props.answer3}</label>
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        id="answer4" 
                        name="questionAnswer" 
                        value={props.answer4}
                        onChange={props.onValueChangeFunc} 
                    />
                    <label className="btnStyle" htmlFor="answer4" >{props.answer4}</label>
                </div>
                <br />
                <br />
                <button className="qcard-button" type="submit">{props.submitBtnText}</button>
            </form>
        </div>
    )
}
