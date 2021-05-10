// this file will handle routing requests for saving game state to the database

const express = require('express'); 
const gamesController = require('../controllers/gameController');
const router = express.Router(); 

// GET request for loading a game by ID
router.get('/:id', 
    gamesController.findGame,
    (req, res) => {
        res.status(200).json(res.locals.games);
    }
);


// POST request for saving/suspending a game
router.post('/', 
    gamesController.createGame,
    (req, res) => {
        res.status(200).json(res.locals.games);
    }
);

// PUT request for updating a previously saved game with a new state
router.put('/:id', 
    gamesController.updateGame,
    (req, res) => {
        res.status(200).json(res.locals.games);
    }
);

// DELETE / abandon a game 
router.delete('/:id', 
    gamesController.deleteGame,
    (req, res) => {
        res.status(200).json(res.locals.games);
    }
);

module.exports = router;