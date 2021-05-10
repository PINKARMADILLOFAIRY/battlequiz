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
userSchema.methods.comparePassword = function(passwordToTest, next) {
  bcrypt.compare(passwordToTest, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch); 
  });
};

const Player = mongoose.model('player', playerSchema)

const gameSchema = new mongoose.Schema({
  lastUpdatedAt: { type: Date, default: Date.now },
  status: { type: String },
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'player',
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'player',
  },
  boardState: Object,
})
const Game = mongoose.model('game', gameSchema);

// const boardSchema = new mongoose.Schema({

// //schema for each unique spot on board
// const boardPositionSchema = new mongoose.Schema({
//   player: playerSchema,
//   rowNumber: String,
//   columnLetter: String,
//   hasBeenHit: {type: Boolean, default: false},
//   overlapsWithShip: {type: Boolean, default: false},
// })

module.exports = {Game, Player};