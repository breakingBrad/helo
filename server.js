const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./server/controller');
const massive = require('massive');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    console.log('DB Connected')
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.warn(err);
  });


app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
})

const port = 4000;
app.listen(port, () => { console.log(`Server listening at localhost:${port}`); });