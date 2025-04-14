const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let users = []; // Store users in memory (this would be a database in production)
let loggedInUser = null; // Track the logged-in user

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' folder

// Registration Route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  // Store the user (you would hash the password in a real application)
  users.push({ username, email, password });
  loggedInUser = { username };

  res.redirect('/'); // Redirect to home page after successful registration
});

// Home Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// User Data Route (returns logged-in user's info)
app.get('/user', (req, res) => {
  if (loggedInUser) {
    res.json(loggedInUser);
  } else {
    res.json({});
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
