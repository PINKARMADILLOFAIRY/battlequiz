// this file will handle routing requests for saving game state to the database

const express = require('express'); 
const gamesController = require('../controllers/gamesController');
const router = express.Router(); 

// GET request for loading a game by ID
router.get('/:id', 
    gamesController.findGame,
    (req, res) => {
        res.status(200).json({});
    }
);


// POST request for saving/suspending a game
router.post('/', 
    (req, res, next) => {
        console.log('entered router.post');
        next();
    },
    gamesController.createGame,
    (req, res) => {
        res.status(200).json({});
    }
);

// PUT request for updating a previously saved game with a new state
router.put('/:id', 
    gamesController.updateGame,
    (req, res) => {
        res.status(200).json({});
    }
);

// DELETE / abandon a game 
router.delete('/:id', 
    gamesController.deleteGame,
    (req, res) => {
        res.status(200).json({});
    }
);

module.exports = router;