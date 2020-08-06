const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const database = require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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