import React from "react";

export function Welcome(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.handleGameStart} >Start</button>
    </div> 
  );
}
