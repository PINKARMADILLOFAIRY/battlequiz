import React, { useState } from 'react';
import Box from './Box.jsx';
import Ship from './Ship.jsx';

export default function Board(props) {
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
      [null, null, null, 'ship2', 'ship2', 'ship2', null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
  );

  const playerTwoGo = () => {
    let square = Math.floor(Math.random() * 99).toString()
    if (square < 10 ) {
      square = "0".concat(square)
    }
    console.log(square)
    console.log(playerOneBoard[square[0]][square[1]])
    if (playerOneBoard[square[0]][square[1]] === null) {
    setPlayerOneBoard(arr => [...arr, arr[square[0]][square[1]] = 'miss'])
  }
    else if (playerOneBoard[square[0]][square[1]].slice(0,4) === 'ship') {
    setPlayerOneBoard(arr => [...arr, arr[square[0]][square[1]] = 'hit'])
  }
  else playerTwoGo();
  }

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
      ['ship1', null, null, null, 'ship5', 'ship5', 'ship5', 'ship5', 'ship5', 'ship5'],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, 'ship2', 'ship2', 'ship2', null, null, null, null],
      [null, null, null, null, null, null, null, null, 'ship4', null],
      [null, null, null, null, null, null, null, null, 'ship4', null],
      [null, null, null, null, null, null, null, null, 'ship4', null],
      [null, 'ship3', 'ship3', 'ship3', 'ship3', null, null, null, 'ship4', null],
      [null, null, null, null, null, null, null, null, 'ship4', null],
    ],
  );

  

  const [playerTwoShipsRemaining, setPlayerTwoShips] = useState(5);

  const handleUpdateBoardTwo = (e) => {
    let x = e.target.id.slice(-2)[0]
    let y = e.target.id.slice(-1)[0]
    if(props.turn === 0) return alert('You need to correctly answer a question to have a turn!')
    props.decrementTurns()
    if (playerTwoBoard[x][y] === null) {
      setPlayerTwoBoard(arr => [...arr, arr[x][y] = 'miss'])
    }else if (playerTwoBoard[x][y].slice(0,4) === 'ship' ) {
      setPlayerTwoBoard(arr => [...arr, arr[x][y] = 'hit'])
    }
    playerTwoGo();
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
      <h1>Ships Destroyed = <span>{playerTwoShipsRemaining}</span></h1>
      {boardTwo}
    <br/>
    </div>
    <div id="playerOneBoard" className="playerOneBoard">
      <h1>Ships Remaining = <span>{playerTwoShipsRemaining}</span></h1>
      {boardOne}
    </div>
    <br/>
      <h2>Available Ships</h2>
    <div className="playerShips" style={{display:'flex'}}>
    {playerOneShips}
    </div>
    <div className='score'>
    </div>
    </div>
  );
}
