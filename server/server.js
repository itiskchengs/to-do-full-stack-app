const express = require("express");
const logger = require("morgan");
const path = require("path");
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*const corsOptions = { 
  origin: 'http://localhost:3000'
}*/

app.use(routes)
app.use(cors({ 
  origin: 'http://localhost:3000'
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });