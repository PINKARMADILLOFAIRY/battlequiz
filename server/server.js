const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const gamesRouter = require('./routes/gamesRouter');
const playerRouter = require('./routes/playerRouter');
require('dotenv').config();

const app = express();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser()); 

// routers
app.use('/games', gamesRouter);
app.use('/player', playerRouter);

// static router from the build folder
app.use('/build', express.static(path.join(__dirname, '../build/bundle.js')));

// base route otherwise serves index
// TODO add homepage and login page for redirects
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

// catch-all 404 route handler
app.use((req, res) => res.status(404).send('I don\'t know, man. I got nothing.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'caught in global error handler',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
