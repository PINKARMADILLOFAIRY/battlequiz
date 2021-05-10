import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    const history = useHistory(); 

    const [password, setPassword] = useState('password');
    const [playerName, setPlayerName] = useState('username');

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updatePlayerName = (e) => {
        setPlayerName(e.target.value);
    }

    // get request to verify login credentials and start session
    const verify = (playerName, password) => {
        fetch('http://localhost:3000/player')
            .then(response => {
                history.push('/game'); 
            });
    }

    // post request for creating a new player
    const newPlayer = (playerName, password) => {
        fetch('http://localhost:3000/player', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({playerName: playerName, password: password})
        })
            .then(response => {
                history.push('/game');
            });
    }

    return(
        <div>
            <input onChange={updatePlayerName} type="text" value={playerName}></input>
            <input onChange={updatePassword} type="password" value={password}></input>
            <button onClick={() => verify(playerName, password)}>Login</button>
            <button onClick={() => newPlayer(playerName, password)}>New Player</button>
        </div>
    )
}

export default Login;