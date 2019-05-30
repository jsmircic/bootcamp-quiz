import React, {useState} from "react";
import {quiz} from "../../api/data"
import {QuestionPresenter} from "../QuestionPresenter";



export function Quiz() {

    const [questionIndex, setQuestionIndex] = useState(0)
    const currentQuestion = quiz.questions[questionIndex]

    return <div> <QuestionPresenter question={currentQuestion}/ > </div>;

}