import React from "react";

/***
 * @description
 * Presents the question with a list of possible answers.
 * The props:
 * @prop {string} question
 * contains the question object to present
 * @prop {string} playerAnswer
 * contains the answer selected by the player
 * @prop {function} onAnswerSelected
 * contains function that should be called when the player selects the anaswer. Selected answer
 * should be passed as function argument
 */
export function QuestionPresenter(props) {
  const { question } = props;
  const { answers } = question;
  const { playerAnswer } = props;

  return (
    <div>
      {question.text}
      <div>
        <button
          className={playerAnswer === "A" ? "button-answer-selected" : ""}
          onClick={() => props.onAnswerSelected("A")}
        >
          {answers.A}
        </button>
        <button
          className={playerAnswer === "B" ? "button-answer-selected" : ""}
          onClick={() => props.onAnswerSelected("B")}
        >
          {answers.B}
        </button>
        <button
          className={playerAnswer === "C" ? "button-answer-selected" : ""}
          onClick={() => props.onAnswerSelected("C")}
        >
          {answers.C}
        </button>
        <button
          className={playerAnswer === "D" ? "button-answer-selected" : ""}
          onClick={() => props.onAnswerSelected("D")}
        >
          {answers.D}
        </button>
      </div>
    </div>
  );
}
