module.exports = {
  userRegister: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { username, password, img } = req.body;
    console.log(`Adding new user: ${username}`);
    dbInstance
      .create_new_user([username, password, img])
      .then(user => res.status(201).json(user))
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      });
  },
  userLogin: (req, res, next) => {
    const { username, password } = req.body;
    const dbInstance = req.app.get('db');
    dbInstance
      .login_user([username, password])
      .then(user => {
        {
          req.session.userid = user[0].id;
        }
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      });
  },
  getPosts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { search, user_posts } = req.query;
    const newSearch = '%' + search + '%';
    const id = req.session.userid;
    console.log(user_posts);
    if (search && user_posts) {
      dbInstance
        .get_posts_filtered([newSearch, id])
        .then(posts => res.status(200).send(posts))
        .catch(err => {
          res.status(500).send({ error: 'Oops! Something went wrong' });
          console.log(err);
        });
    } else if (search) {
      dbInstance
        .get_posts_search([newSearch])
        .then(posts => res.status(200).send(posts))
        .catch(err => {
          res.status(500).send({ error: 'Oops! Something went wrong' });
          console.log(err);
        });
    } else if (user_posts) {
      dbInstance
        .get_posts_user([id])
        .then(posts => res.status(200).send(posts))
        .catch(err => {
          res.status(500).send({ error: 'Oops! Something went wrong' });
          console.log(err);
        });
    } else {
      dbInstance
        .get_posts([])
        .then(posts => res.status(200).send(posts))
        .catch(err => {
          res.status(500).send({ error: 'Oops! Something went wrong' });
          console.log(err);
        });
    }
  },
  getPostSingle: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance
      .get_single_post([id])
      .then(post => {
        res.status(200).send(post);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      });
  },
  newPost: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { title, img, content } = req.body;
    const author_id = req.session.userid;
    dbInstance
      .add_post([title, img, content, author_id])
      .then(() => {
        res.status(200).send({ message: 'New Post Created' });
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      });
  },
  userInfo: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const author_id = req.session.userid;
    dbInstance
      .get_user_info([author_id])
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      });
  },
}