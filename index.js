// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 // Define route to handle incoming requests
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.socket.remoteAddress; // Extract IP address from request
  const language = req.headers['accept-language']; // Extract language from request headers
  const software = req.headers['user-agent']; // Extract user agent from request headers

  // Create response JSON object
  const response = {
    ipaddress:ipaddress,
    language:language,
    software:software
  };

  // Send response
  res.json(response);
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
