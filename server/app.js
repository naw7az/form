const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const db = require('./config/database');
const User = require('./models/User')


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Test Connection 
db.authenticate()
  .then(() => console.log('Database Connected...'))
  .catch((err) => console.log('Error') + err)


// adding data
app.post('/', (req, res) => {
  const {email, password, name} = req.body;
  const hash = bcrypt.hashSync(password);
  User.sync({force: true}).then (() => {
    return User.create({
      name: name,
      email: email,
      password: hash
    })
  })
  console.log('Info added to Database')
})


app.listen('5000', () => {
  console.log('Server started on port 5000');
});

