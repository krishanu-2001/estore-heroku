const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = "mongodb://localhost/fresco-app";
mongoose.connect(db, {  useNewUrlParser: true, 
                        useCreateIndex: true,
                     }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database onnection established succesfully");
}) 

const itemsRouter = require('./routes/items.js');
const usersRouter = require('./routes/users.js');

app.use('/items', itemsRouter);
app.use('/users', usersRouter);

app.listen(port, ()=> {
    console.log('Server is running on port: '+port);
});