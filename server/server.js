const express = require('express');
const path = require('path');
// TODO: Add your Database connection here
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
// TODO: Import your routes

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

// app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

