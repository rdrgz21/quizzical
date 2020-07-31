import React from 'react';


export default function QCard(props) {
    return (
        <div>
            <h2>{props.qNo} {props.text}</h2>
            <form onSubmit={props.formSubmitFunc}>

                <input 
                    type="radio" 
                    id="answer1" 
                    name="questionAnswer" 
                    value={props.answer1}
                    onChange={props.onValueChangeFunc}
                />
                <label htmlFor="answer1" >{props.answer1}</label>
                <br />

                <input 
                    type="radio" 
                    id="answer2" 
                    name="questionAnswer" 
                    value={props.answer2}
                    onChange={props.onValueChangeFunc}
                />
                <label htmlFor="answer2" >{props.answer2}</label>
                <br />

                <input 
                    type="radio" 
                    id="answer3" 
                    name="questionAnswer" 
                    value={props.answer3}
                    onChange={props.onValueChangeFunc} 
                />
                <label htmlFor="answer3" >{props.answer3}</label>
                <br />

                <input 
                    type="radio" 
                    id="answer4" 
                    name="questionAnswer" 
                    value={props.answer4}
                    onChange={props.onValueChangeFunc} 
                />
                <label htmlFor="answer4" >{props.answer4}</label>
                <br />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
