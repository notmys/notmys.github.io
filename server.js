const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  const userData = {
    username,
    email,
    password, // ❗ In real apps, you should hash passwords!
  };

  // Save to JSON file
  const filePath = path.join(__dirname, 'users.json');
  let users = [];

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath);
    users = JSON.parse(existingData);
  }

  users.push(userData);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.send(`<h1>✅ Registration complete</h1><a href="/">Back to Home</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
