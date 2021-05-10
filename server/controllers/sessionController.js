/* 
controller sets cookies and handles JWT sessions
*/ 
const Session = require('../models/sessionModel');

const sessionController = {};

// signs and sets JWT as a cookie to verify the session
sessionController.setCookie = (req, res, next) => {
    // create payload for JWT containing {ssid, username iat
    const payload = {
        // ssid and playerName should still be on res.locals from logging in
        'ssid': res.locals.ssid,
        'playerName': req.body.playerName,
        'iat': Date.now()
    };

    // need to add environment variable for JWT_SECRET
    const signature = JWT.sign(payload, process.env.JWT_SECRET, {expiresIn: 1000 * 60 * 60});
    res.cookie('battlequiz', signature, {httpOnly: true});
    next();
}

// confirm that the JWT is present to verify they are logged in, otherwise redirect them to login page
sessionController.isLoggedIn = (req, res, next) => {
    // check if the cookie exists
    if (!Object.keys(req.cookies).includes('battlequiz')) {
        // return them to the login page if the session has expired or is not present
        return res.redirect('./login');
    }

    const returnedSignature = req.cookies.battlequiz;

    // verify signature
    JWT.verify(returnedSignature, process.env.JWT_SECRET, (err, returnedJWT) => {
        // presumably, jwt was not signed properly
        if (err) return next({message: err});
        // if expired, redirect to login
        if (returnedJWT.exp < Date.now()) return res.redirect('/login');
        // otherwise, good to go on to the next
        return next();
    })
}

// see if they have a session active, if not, start one
sessionController.startSession = (req, res, next) => {
    Session.findOne({cookieId: res.locals.ssid})
        .then(foundSession => {
            // if there is a session, move on
            if (foundSession) return next();
            // no session? at this point, they are logged in so create a new one and then move on
            Session.create({cookieId: res.locals.ssid});
            return next(); 
        })
        .catch(err => next({message: err}))
};

module.exports = sessionController;