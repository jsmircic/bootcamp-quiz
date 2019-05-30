import React from "react";

export function QuestionPresenter(props) {

    const {question}=props
    const {answers} = question

    
    return <div>{question.text}
        <div>
            <button>{answers.A}</button>
            <button>{answers.B}</button>
            <button>{answers.C}</button>
            <button>{answers.D}</button>
        </div>

    
    </div>
    
 
}