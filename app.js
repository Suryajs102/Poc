// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const routes = require('./routes');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6",
 { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/api/cars',require ('./routes/index.js'))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
