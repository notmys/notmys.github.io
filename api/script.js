const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const luaCode = fs.readFileSync(path.join(__dirname, '../scripts/script.lua'), 'utf8');
const SECRET_KEY = process.env.SECRET_KEY || 'Silence.Wtf';

app.get('/script', (req, res) => {
  const userAgent = req.headers['user-agent'];
  const key = req.query.key;
  if (userAgent && userAgent.startsWith('Roblox/WinInet') && key === SECRET_KEY) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(luaCode);
  } else {
    res.status(403).send('Access Denied: Unauthorized client or invalid key.');
  }
});

module.exports = app;
