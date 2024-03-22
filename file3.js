// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// CRUD operations (example: create operation)
app.post('/create', (req, res) => {
    // Logic to create a new item
    res.send('Item created successfully');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
