import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';

function Timer(props){

  const [time, setTime] = useState(30);
  const [color, setColor] = useState('black');

  useEffect(() => {
    if (!time) return;
    if(time <= 10) setColor('red');
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);


  if(props.timer === false){
    
    return(
      <Paper elevation ={2} style ={{margin:"auto", height:"7.25vh"}}>
        <div style ={{textAlign:"center", fontSize:"6.5vh", marginLeft:"12.25", color:'black'}}>{30}</div>
      </Paper>
    );

  } else {

    return(
      <Paper elevation ={2} style ={{margin:"auto", height:"7.25vh"}}>
        <div style ={{textAlign:"center", fontSize:"6.5vh", marginLeft:"12.25", color:color}}>{time}</div>
      </Paper>
    );

  }
}

export default Timer;

