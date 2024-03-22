// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to display group names using HTML
app.get('/', (req, res) => {
    res.send('<h1>Jay Vaghasiya | Yashkumar Dholakiya | Himanshi Jadiya</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
