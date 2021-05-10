import React, { useState } from 'react';
import Draggable from 'react-draggable';

export default function Ship(props) {
  const [orientation, setOrientation] = useState('column');

  const handleClick = (e) => {
    if (e.target.id === '1') {
      orientation === 'row' ? setOrientation('column') : setOrientation('row')
    }
  };

  const shipMain = [];
  
  for (let i = 0; i < props.initialLength; i++) {
    shipMain.push(<span>⬛</span>)
  }

  const ship = (

    <div style={{display: 'flex', flexDirection: orientation}}>
      <span id={1}>⬛</span>
      {shipMain}
    </div>
  );

  return (
    <Draggable grid={[22, 21]} onMouseDown={handleClick}>
      {ship}
    </Draggable>
  );
}
