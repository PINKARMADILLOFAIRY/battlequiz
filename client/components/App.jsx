import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Quiz from './Quiz.jsx';
import Board from './Board.jsx'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function App() {

  const classes = useStyles();
  const [turn,setTurns] = useState(0);

  const decrementTurns = () => {
    if(turn > 0) setTurns(turn - 1);
  }

  return (
    <div className="App;" style = {{display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
      <Board turn={turn} decrementTurns={decrementTurns}/>
      <div style = {{display:"flex",flexDirection:"column"}}>
        <div className="Scoreboard">
         <h1>Turns Remaining: <span>{turn}</span></h1>
        </div>
        <Button variant="contained" color="secondary">
        Load
      </Button>
        <Button variant="contained" color="primary">
        Save
      </Button>
      </div>
      <Quiz turn={turn} setTurns = {setTurns}/>
      {/* <Game /> */}
    </div>
  );
}
