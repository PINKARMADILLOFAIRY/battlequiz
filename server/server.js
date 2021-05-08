const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// const mongoURI = 'mongo://mydb.com';
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

app.use('/build', express.static(path.join(__dirname, '../build/bundle.js')));

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/public/index.html')));

app.use((req, res) => res.status(404).send('I don\'t know, man. I got nothing.'));

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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
