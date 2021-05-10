import React, { useState } from 'react';
import Box from './Box.jsx';
import Ship from './Ship.jsx';

export default function Board() {
  // create player 1 board 10 x 10
  // each square can be empty or ship
  const [playerOneBoard, setPlayerOneBoard] = useState(
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

  const initialShips = [];
  for(let i = 1; i < 6; i++ ) {
    initialShips.push(
    <Ship id={`ship${i}`}
    key={`ship${i}`}
    initialLength={i}
    currentLength={i}
    >
    </Ship>
    )
  }
  const [ playerOneShips, setPlayerOneShips ] = useState(initialShips);


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
      ['ship1', null, null, null, null, null, null, null, null, null],
      ['ship1', null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, 'ship2', 'ship2', 'ship2', null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
  );

  

  const [playerTwoShipsRemaining, setPlayerTwoShips] = useState(5);

  const handleUpdateBoardTwo = (e) => {
    let x = e.target.id.slice(-2)[0]
    let y = e.target.id.slice(-1)[0]
    if (playerTwoBoard[x][y] === null) {
      return setPlayerTwoBoard(arr => [...arr, arr[x][y] = 'miss'])
    }
    // console.log(playerTwoBoard[x][y].slice(0,4)[0])
      if (playerTwoBoard[x][y].slice(0,4) === 'ship' ) {
      return setPlayerTwoBoard(arr => [...arr, arr[x][y] = 'hit'])
    }
  }

  const [shipOneLength, setLength] = useState(2);

  const boardTwo = [];
  for (let i=0; i < 10; i++) {
    const row = [];
    for (let j=0; j<10; j++) {
      row.push(<Box key={`box${i}${j}`} id={`box${i}${j}`} ship={playerTwoBoard[i][j]} updateBoard={handleUpdateBoardTwo}/>)
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
    {playerOneShips}
    <div className='score'>
      <h1>Ships Remaining = <span>{playerTwoShipsRemaining}</span></h1>
    </div>
    </div>
  );
}
