const express = require('express');
const app = express();
//allows for app.get, delete, etc.
const morgan = require('morgan');
app.use(morgan('dev'));
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors');

app.use(cors());
// app.get, etc. uses cors, cors facilitates connecting servers
app.use(express.json());
//whenever a request comes into the server, parse it out, req and res (used to be body.parser)

app.get('/', (req, res) => {
  res.send('server is working')
})

app.get('/api/books', (req, res) => {
knex
  .select('*')
  .from('books')
  .then((data) => {
    return res.status(200).send(data)
  })
  .catch((err)=> {
    res.status(404).send(
     "The data you are looking for could not be found at this time. Please try again"
  );
})
})

app.get('/api/:isbn', (req, res) => {
  //better not to have capitals (ISBN)
  knex
    .select('*')
    .from('books')
    .where('ISBN', req.params.isbn)
    // better not to have capitals (ISBN)
    // where ISBN, look for the book in the table with the ISBN that matches req.params.isbn (the query)
    .then((data) => {
      return res.status(200).send(data)
    })
    .catch((err)=> {
      res.status(404).send(
       "The data you are looking for could not be found at this time. Please try again"
    );
  })
  })



module.exports = app
