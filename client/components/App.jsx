import React, { useState } from 'react';
import Board from './Board.jsx'
import Quiz from './Quiz.jsx';

export default function App() {
  return (
    <div className="App">
      <Quiz />
      <Board></Board>
    </div>
  );
}
