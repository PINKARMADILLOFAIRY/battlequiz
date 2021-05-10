import React, { useState } from 'react';
import Board from './Board.jsx'
import Quiz from './Quiz.jsx';
import Login from './Login.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {

  const [turn,setTurns] = useState(0);

  const decrementTurns = () => {
    if(turn > 0) setTurns(turn - 1);
  }

  return (
    <div className="App;" style = {{display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/game">
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
          </Route>
          
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}
