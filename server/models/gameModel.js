/* 
Game Model for saving game state
*/ 

const mongoose = require('mongoose');

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

module.exports = Game;