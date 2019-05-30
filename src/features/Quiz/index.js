import React, { useState } from "react";
import { quiz } from "../../api/data";
import { QuestionPresenter } from "../QuestionPresenter";

export function Quiz() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = quiz.questions[questionIndex];

  const onAnswerSelected = answer => {
    setPlayerAnswer(answer);
  };

  return (
    <div>
      <QuestionPresenter
        onAnswerSelected={onAnswerSelected}
        playerAnswer={playerAnswer}
        question={currentQuestion}
      />
    </div>
  );
}
