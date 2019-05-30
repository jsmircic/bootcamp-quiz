import React, { useState } from "react";
import { quiz } from "../../api/data";
import { QuestionPresenter } from "../QuestionPresenter";

/***
 * @description
 * This is our root quiz component. Here we mange the game state (current question, selected answer...)
 * Quiz component should be visible when the game was started by the player.
 */
export function Quiz() {
  /**create a state variable for tracking the selected answer
   * and desturcture from the useState result array  */
  const [playerAnswer, setPlayerAnswer] = useState("");

  /**create a state variable for tracking the current question index and
   * destructure from the useState result array
   */
  const [questionIndex, setQuestionIndex] = useState(0);

  /***
   * take the current question from the quiz object
   */
  const currentQuestion = quiz.questions[questionIndex];

  /**This is the function that should be called when the player selected the answer */
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
