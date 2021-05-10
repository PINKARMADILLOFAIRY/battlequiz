const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const gamesRouter = require('./routes/gamesRouter');
require('dotenv').config();

const app = express();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// handle parsing request body
app.use(express.json());
app.use(cors());

// routers
app.use('/games', gamesRouter);

// static router from the build folder
app.use('/build', express.static(path.join(__dirname, '../build/bundle.js')));

// base route otherwise serves index
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
