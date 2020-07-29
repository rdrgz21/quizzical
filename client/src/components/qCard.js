import React from 'react';


export default function QCard(props) {
    return (
        <div>
            <h2>{props.qNo} {props.text}</h2>
            <button>{props.answer1}</button>
            <button>{props.answer2}</button>
            <button>{props.answer3}</button>
        </div>
    )
}
