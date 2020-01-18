// Requiring the modules
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const eventsRoutes = require('./routes/events');
const commentsRoutes = require('./routes/comments');

//Load the env vars
require('dotenv').config();

// create the Express App
const app = express();

//connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');



// view engine setup 
app.set('view engine', 'ejs');

// mount middleware 

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'ORGANIZATIONISKey',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

//Mount routes
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/events', eventsRoutes);
app.use('/comments', commentsRoutes);
// Listen to port

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
  });