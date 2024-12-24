const dotenv = require("dotenv");
const express = require("express")
const connectDB = require("./config/config.js")
const passport = require('passport');
const session = require('express-session');
import router from './routers';
const authRoutes = require('./routes/userAuth.js');

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(router)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 
    }
  }));
  app.use('/api/auth', authRoutes);
connectDB()
module.exports = app