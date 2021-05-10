// this will handle the middleware for authenticating a user, saving/updating their games and stats
const { Player } = require('../models/gameModel');

const playerController = {};

playerController.createPlayer = (req, res, next) => {
    // note the controller expects the newUser as an object in the body
    const newPlayer = req.body; 
    // make sure there is a username and password on the body;
    if (!newPlayer.password || !newPlayer.username) {
        // did not have username and password
        return res.status(200).json({error: 'Could not login'});
    }
    // if the player already exists, do not create it, throw an error
    Player.findOne({username: newUser.username})
        .then(foundUser => {
            if (foundUser) return next({message: 'user already exists'})
        });
    // otherwise create a new player
    Player.create(newPlayer)
        .then(createdUser => {
            res.locals.ssid = user.id;
            return next();
        })
        .catch(err => next(err));
    }

playerController.verifyPlayer = (req, res, next) => {
    const playerToVerify = req.body;
    // missing password or username
    if (!playerToVerify.password || !playerToVerify.username) {
        console.log('missing required information');
        return next({message: 'missing required information'})
    }
    Player.findOne({username: playerToVerify.username}, (err, returnedPlayer) => {
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

export default playerController;