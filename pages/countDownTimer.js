import React from "react";
import Countdown from "./Components/countdown";

export default function App() {
    const [currentTimer, setTimerStartState] = React.useState("");
  const { isRunning, start, stop, seconds } = Countdown(currentTimer);
  

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <h2>{isRunning ? seconds : "Timer not running"}</h2>
      <input type="number" value={currentTimer} onChange={(C) => setTimerStartState(C.target.value)} />

      <button onClick={start} disabled={isRunning}>Start Timer</button>

      <button onClick={stop} disabled={!isRunning}>Stop Time!</button>
    </div>
  );
}