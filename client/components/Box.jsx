import React, { useState, useRef } from 'react';

export default function Box(props) {
  const thing = useRef(null);

  let box = null
  if (props.ship === null) {
    box = <span id={props.id} role='img' onClick={props.updateBoard}>⬜</span>
  } 
  else if (props.ship.includes('ship')) {
    box = <span id={props.id} role='img' onClick={props.updateBoard}>⬜</span>
  }
  
  else if (props.ship === 'miss') {
    box = <span id={props.id} role='img' onClick={props.updateBoard}>⬛</span>
  }
  else if (props.ship === 'hit') {
    box = <span id={props.id} role='img' onClick={props.updateBoard}>🟥</span>
  }



  return (
    <div id={props.id} className='box' ref={thing} >
      {box}

    </div>
  );
}