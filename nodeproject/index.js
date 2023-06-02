// import required packages
const express = require('express');
const https = require('https');
const fs = require('fs');
require('dotenv').config()

const app = express();

const u_no  = process.env.u_no || 11


// create a route for the app
app.get('/', (req, res) => {
  res.send('app '+u_no);
});

// another route
app.get('/test', (req, res) => {
  res.send('app '+u_no+'/test');
});



const httpsServer = https.createServer({
  key: fs.readFileSync('./certs/localhost+2-key.pem'),
  cert: fs.readFileSync('./certs/localhost+2.pem'),
}, app);


httpsServer.listen(8000, () => {
    console.log('HTTPS Server running on port https://localhost:8000');
});