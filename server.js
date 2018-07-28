const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./server/controller');
const massive = require('massive');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

require('dotenv').config();

const app = express();
app.use(helmet());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(bodyParser.json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    console.log('DB Connected');
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.warn(err);
  });

  app.post('/api/new-user', controller.userRegister)
  app.post('/api/login', controller.userLogin)
  app.get('/api/posts', controller.getPosts)
  app.get('/api/post/:id', controller.getPostSingle)
  app.post('/api/newpost', controller.newPost)
  app.post('/api/auth/logout', (req, res, next)=> req.session.destroy)
  app.get('/api/auth/me', controller.userInfo)

app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});