import React, { useState } from 'react';

export default function Box(props) {
  // local state, needs moving up to board component
  // const [ship, setShip] = useState(false);

  return (
    <div className='box'>
      {/* Needs to contain an image of part of a ship, or an empty square (the sea) */}
      {/* <img src="" alt=""/> */}
      {/* using a square to test initially */}
      {props.ship ? <span role='img'>⬛</span> : <span role='img'>⬜</span>}
    </div>
  );
}