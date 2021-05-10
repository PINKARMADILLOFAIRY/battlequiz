import React, {Component, useState, useEffect }  from 'react';
// import Game from './Game';
import Quiz from './Quiz.jsx'
import Board from './Board.jsx'


export default function App() {

  const [turn,setTurns] = useState(0);

  const decrementTurns = () => {
    if(turn > 0) setTurns(turn - 1);
  }

  return (
    <div className="App;" style = {{display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
      <Board turn={turn} decrementTurns={decrementTurns}/>
      <div style = {{display:"flex",flexDirection:"column"}}>
        <div className="Scoreboard">
          Turns<span>{turn}</span>
        </div>
        <button>Save</button>
        <button>Load</button>
      </div>
      <Quiz turn={turn} setTurns = {setTurns}/>
      {/* <Game /> */}
    </div>
  );
}
