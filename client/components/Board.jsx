import React, { useState } from 'react';
import Box from './Box.jsx';

export default function Board() {
  // create player 1 board 10 x 10
  // each square can be empty or ship
  const [playerOneBoard, setPlayerOneBoard] = useState(
    [
      [true, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, true, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
  );

  const boardOne = [];
  for (let i=0; i < 10; i++) {
    const row = [];
    for (let j=0; j<10; j++) {
      row.push(<Box key={`box${i}${j}`} id={`box${i}${j}`} ship={playerOneBoard[i][j]} />)
    }
    boardOne.push(
      <div key={`row${i}`} className="row" style={{display:'flex'}}>
        { row}
      </div> 
      )
  }


  // create player 2 board 10 x 10
  // each square can be empty or ship
  const [playerTwoBoard, setPlayerTwoBoard] = useState(
    [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
  );


  const boardTwo = [];
  for (let i=0; i < 10; i++) {
    const row = [];
    for (let j=0; j<10; j++) {
      row.push(<Box key={`box${i}${j}`} id={`box${i}${j}`} ship={playerTwoBoard[i][j]} />)
    }
    boardTwo.push(
      <div key={`row${i}`} className="row" style={{display:'flex'}}>
        { row}
      </div> 
      )
  }



  return (
    <div className="game">
    <div className="playerTwoBoard">
      {boardTwo}
    <br/>
    </div>
    <div className="playerOneBoard">
      {boardOne}
    </div>
    </div>
  );
}
