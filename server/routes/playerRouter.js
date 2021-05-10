// this file will eventually handle the request routing to log in, sign up, and handle player state during games

const express = require('express'); 
const playerController = require('../controllers/playerController');
const router = express.Router();

router.get('/',
    playerController.verifyPlayer,
    (req, res) => {
        res.status(200).json({ssid: res.locals.ssid})
        // res.redirect('/home');
    }
);

router.post('/', 
    playerController.createPlayer,
    (req, res) => {
        // TODO if successful, we want to redirect them to the game
        // calling that page 'home' for now
        // res.redirect('/home');
        res.status(200).json({ssid: res.locals.ssid})
    }
);

module.exports = router;