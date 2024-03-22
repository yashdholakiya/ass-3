// Import required modules
const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();

// Read JSON data from file
const rawData = fs.readFileSync('./data/clothes.json');
const jsonData = JSON.parse(rawData);

// Define a route to display JSON contents
app.get('/data', (req, res) => {
    res.json(jsonData);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
