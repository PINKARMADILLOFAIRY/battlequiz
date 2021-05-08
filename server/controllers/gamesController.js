// this file contains middleware for CRUD functionality on game state

// const { Game } = require('../models/Games'); // ! make sure this path is correct

const gamesController = {};

gamesController.createGame = (req, res, next) => {
    // entered createGame
    console.log('entered createGame with body: ', req.body);
    Game.create(req.body) 
        .then(queryResponse => {
            res.locals.games = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express error handler caught at createGame'});
        })
};

gamesController.findGame = (req, res, next) => {
    Game.findOne(req.params.id)
        .then(queryResponse => {
            res.locals.games = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err); 
            return next({log: 'express error handler caught at findGame'});
        })
};

gamesController.updateGame = (req, res, next) => {
    Game.findOneAndUpdate({id: req.params.id}) // ! check on this one
        .then(queryResponse => {
            res.locals.games = queryResponse;
            return next(); 
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express error handler caught at updateGame'});
        })
};

gamesController.deleteGame = (req, res, next) => {
    Game.findOneAndDelete({id: req.params.id})
        .then(queryResponse => {
            res.locals.games = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err); 
            return next({log: 'express error handler caught at deleteGame'});
        })
};

module.exports = gamesController;