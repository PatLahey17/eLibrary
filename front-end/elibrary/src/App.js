import app from './App.css';
//to use axios after npm install axios to use for fetches
import React, {useState, useEffect, useContext} from 'react'
import Books from './components/books.js'
import Book from './components/book.js'
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom'


//these are to be able to click links and rerender components
// npm install react-router-dom to use those
const axios = require('axios');

function App() {

 

  const [listOfBooks, setListOfBooks] = useState([])


  useEffect( async ()=> {
    axios.get('http://localhost:3030/api/books')
    .then(
      (response)=> {
        setListOfBooks(response.data)

    })
  },[])
  //empty array as second arg of useEffect to tell it to update if state changes. will rerun useEffect
  //useEffect is like component did mount, helps to upload information to site


  return (
    <Router>
      <div className="App">
        <Link to = '/'>
        <h1>
          SDI Library Page
        </h1>
        </Link>
        <Switch>
          <Route exact path='/'>
            <div>
              <Books books={listOfBooks} />
      {/* react components uppercase, selfclosing , includes listOfBooks, no need of $, this is prop drilling! can go from app to books */}
            </div>
          </Route>
          <Route exact path='/book'>
              <Book setList = {setListOfBooks}  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
