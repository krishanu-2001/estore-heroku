const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const database = require('./database');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(
    {origin: "http://localhost:3000",
    credentials: true,}
));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
      })
    );
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require ('./passportConfig')(passport);

const itemsRouter = require('./routes/items.js');
const usersRouter = require('./routes/users.js');

app.get('/',(req, res)=>{
    res.send('Hello World!')
});
app.use('/items', itemsRouter);
app.use('/users', usersRouter);

app.listen(port, ()=> {
    console.log('Server is running on port: '+port);
});