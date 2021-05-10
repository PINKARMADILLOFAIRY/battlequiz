// this file will eventually handle the request routing to log in, sign up, and handle player state during games

const express = require('express'); 
const playerController = require('../controllers/playerController');
const router = express.Router();

router.get('/',
    playerController.verifyPlayer,
    (req, res) => {
        res.redirect('/home');
    }
);

router.post('/', 
    playerController.createPlayer,
    (req, res) => {
        res.redirect('/home');
    }
);