const express = require('express');
const mongoose = require('mongoose'); 
const uri = require('../mongoURI');
const path = require('path'); 


const app = express(); 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors()); 

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use((req, res) => res.status(404).send('I don\'t know, man. I got nothing.'));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'caught in global error handler',
        status: 500,
        message: { err: 'An error occured'},
    };
    const errorObj = {...defaultErr, ...err};
    console.log(errorObj.log); 
    return res.status(errorObj.status).json(errorObj.message); 
})

app.listen(3000, () => {
    console.log('Listening on port 3000'); 
})