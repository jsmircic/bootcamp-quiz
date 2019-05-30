import React, { useState } from "react";
import "./App.css";
import { Welcome } from "./features/welcome";
import { Quiz } from "./features/Quiz";

export default function App() {
    //jsx

    //destructuring array
    const [isGameInProgress, setGameInProgress] = useState(false);
    
    //conditional rendering
  return isGameInProgress ? <Quiz / > : <Welcome handleGameStart={() => setGameInProgress(true)} / > ;
}
