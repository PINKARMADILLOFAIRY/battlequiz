/* 
this file handles the request routing to log in, sign up, verify passwords and set sessions
*/ 
const express = require('express'); 
const playerController = require('../controllers/playerController');
const sessionController = require('../controllers/sessionController')
const router = express.Router();

// get requests will verify the player exists, is logged in, has session cookies set with signed JWT
router.get('/',
    playerController.verifyPlayer,
    sessionController.setCookie,
    sessionController.startSession,
    (req, res) => {
        res.status(200).json({ssid: res.locals.ssid})
        // TODO res.redirect('/home');
    }
);

// post requests will generate a new player and save it to MongoDB with bcrypted password
router.post('/', 
    playerController.createPlayer,
    sessionController.setCookie,
    sessionController.startSession,
    (req, res) => {
        // TODO if successful, we want to redirect them to the game
        // calling that page 'home' for now
        // res.redirect('/home');
        res.status(200).json({ssid: res.locals.ssid})
    }
);

module.exports = router;