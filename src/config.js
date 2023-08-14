const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'dXAYmY4dZ5',
  resave: false,
  saveUninitialized: false
}));

const clientes = require('./routes/Users');
app.use(clientes);

app.listen(8001, () => {
  console.log('Server running on port 8001');
});
