const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
require("dotenv").config();

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully.");
})

const notesRouter = require('./routes/notes');

app.use('/notes', notesRouter);

if(process.env.NODE_DEV === 'production'){
  require("dotenv").config();
  app.use(express.static('client/build'));

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port : ${port}`));
  