/* 
Player model for logging in a user
*/ 

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

const SALT_WORK_FACTOR = 10;

// playerSchema for login
const playerSchema = new mongoose.Schema({
  playerName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// hashes the player's password before saving the user
playerSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hashed) => {
    if (err) return next(err); 
    this.password = hashed;
    return next(); 
  });
});

// compares hashed passwords for login
playerSchema.methods.comparePassword = function(passwordToTest, next) {
  bcrypt.compare(passwordToTest, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch); 
  });
};

const Player = mongoose.model('player', playerSchema)

module.exports = Player;