const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// create connection

const db = mysql.createConnection({
  host: 'localhost',
  user: '<your root id>',
  password: '<your root password>',
  database: 'my_db' // create a database name 'my_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected")
})

// creating table
let table = 'form'
let myTable = `CREATE TABLE ${table}(id int AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(100), password VARCHAR(250), PRIMARY KEY(id))`;
db.query(myTable, (err, res) => {
  if(err) throw err;
  console.log(res)
})

// adding data

app.post('/', (req, res) => {
  const {email, password, name} = req.body;
  const hash = bcrypt.hashSync(password);

  let database = {
    name: name,
    email: email,
    password: hash
  }
  let myData = `INSERT INTO ${table} SET ?`
  db.query(myData, database, (err, res) => {
    if(err) throw err;
    console.log('data added')
  })
})


app.listen('5000', () => {
  console.log('Server started on port 5000');
});

