import React from "react";

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
