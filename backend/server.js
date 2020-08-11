const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const database = require('./database');
require('dotenv').config(
    {
        path: './config/config.env'
    }
);


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const itemsRouter = require('./routes/items.js');
const usersRouter = require('./routes/users.js');

app.get('/',(req, res)=>{
    res.send('Hello World!')
});
app.use('/items', itemsRouter);
app.use('/users', usersRouter);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

app.listen(port, ()=> {
    console.log('Server is running on port: '+port);
});