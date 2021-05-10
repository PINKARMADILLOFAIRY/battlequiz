// this will handle the middleware for authenticating a player, saving/updating their games and stats
const { Player } = require('../models/gameModel');

const playerController = {};

playerController.createPlayer = (req, res, next) => {
    // note the controller expects the newPlayer as an object in the body
    const newPlayer = req.body; 
    console.log(newPlayer);
    // make sure there is a playerName and password on the body;
    if (!newPlayer.password || !newPlayer.playerName) {
        // did not have playerName and password
        return res.status(200).json({error: 'Could not login'});
    }
    // if the player already exists, do not create it, throw an error
    Player.findOne({playerName: newPlayer.playerName})
        .then(foundPlayer => {
            if (foundPlayer) return next({message: 'player already exists'})
        });
    // otherwise create a new player
    Player.create(newPlayer)
        .then(createdPlayer => {
            res.locals.ssid = createdPlayer.id;
            return next();
        })
        .catch(err => next({message: err.message}));
    }

playerController.verifyPlayer = (req, res, next) => {
    const playerToVerify = req.body;
    // missing password or playerName
    if (!playerToVerify.password || !playerToVerify.playerName) {
        console.log('missing required information');
        return next({message: 'missing required information'})
    }
    Player.findOne({playerName: playerToVerify.playerName}, (err, returnedPlayer) => {
        if (err) return next(err);
        if (!returnedPlayer) return next({message: 'player does not exist'});
        returnedPlayer.comparePassword(playerToVerify.password, function(err, isMatch) {
            if (err) return next(err);
            if (!isMatch) {
                console.log('password did not match');
                return next({message: 'password did not match'});
            }
            res.locals.ssid = returnedPlayer.id;
            console.log(`${returnedPlayer.id} logged in`);
            return next();
        });
    });
};

module.exports = playerController;