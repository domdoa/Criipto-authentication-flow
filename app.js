const express = require('express')
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys');

const app = express()

// cookie session setup
app.use(session({
  secret: keys.session.secret,
  resave: false,
  saveUninitialized: true
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth-routes')
app.use('/auth',authRoutes)

module.exports = app