const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Define a schema for the data
const mySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Define a model for the data
const myModel = mongoose.model('MyData', mySchema);

// Create a new express app
const app = express();

// Set up the middleware
app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

// Set up the endpoint for the form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newData = new myModel({ name, email, message });
    await newData.save();
    res.send('Data saved successfully!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving data!');
  }
});

// Start the server
app.listen(4001, () => console.log('Server started on port 4001'));
