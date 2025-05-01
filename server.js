// server.js
// Install with: npm install express axios body-parser cors dotenv
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID     = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const REDIRECT_URI  = process.env.DISCORD_REDIRECT_URI; 

app.use(cors());
app.use(bodyParser.json());

app.post('/exchange_code', async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'Missing code' });

  try {
    const tokenRes = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    res.json(tokenRes.data);
  } catch (err) {
    console.error('OAuth token error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to exchange code' });
  }
});

app.listen(PORT, () => {
  console.log(`OAuth2 backend listening on port ${PORT}`);
});
