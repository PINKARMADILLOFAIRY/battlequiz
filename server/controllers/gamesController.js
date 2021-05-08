// this file contains middleware for CRUD functionality on game state

const { Game } = require('../models/gameModel'); // make sure this path is correct

const gamesController = {};

gamesController.createGame = (req, res, next) => {
    // NOTE: createGame expects req.body to BE the game object we are saving
    Game.create(req.body) 
        .then(queryResponse => {
            // we will return the game object model that we created for confirmation
            res.locals.games = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express error handler caught at createGame', message: err});
        })
};

gamesController.findGame = (req, res, next) => {
    // expects :id/<mongoIDnumber> in the route
    // TODO we could potentially allow players to "name" their game or identify them by something else, like date created
    const queryFilter = {_id: req.params.id}
    Game.findOne(queryFilter)
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
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false}) // ! check on this one
        .then(queryResponse => {
            // should return NEW updated game object to confirm
            res.locals.games = queryResponse;
            return next(); 
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express error handler caught at updateGame'});
        })
};

gamesController.deleteGame = (req, res, next) => {
    Game.findOneAndDelete({_id: req.params.id})
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