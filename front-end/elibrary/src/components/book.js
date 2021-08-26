import {useLocation, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'


const axios = require('axios');

function Book ({setList}){
  let location = useLocation()
  let book = location.state

  const[isBookCheckedOut, setIsBookCheckedOut] = useState(book.checkedOut)

  const[show, setShow]= useState(false)

  const[userID, setUserID] = useState([])

  useEffect(()=>{
    if(isBookCheckedOut){
      setShow(false)
    } else {
      setShow(true)
    }
  },[])

  let onCheckOut = () => {
    
    axios.put(`http://localhost:3030/api/books/${book.ISBN}/checkout/${userID}`)
    .then(
      (response)=>{
        setList(response.data)
        
        
      }
    )
  }
  let onReturn = () => {
    
    axios.put(`http://localhost:3030/api/books/${book.ISBN}/return/`)
    .then(
      (response)=>{
        setList(response.data)
      }
    )
 
    
  }

  console.log(userID)
return (
  <ul className='books' key = {book.ISBN}>
      <li>
        {book.title}
      </li>
      <li>
        {book.author}
      </li>
      <li>
        {book.ISBN}
      </li>
      <li>
        {book.checked}
      </li>
      {show && 
      <form>

        <input type='text'placeholder='input userID for book checkout' onChange={(event)=>{
          setUserID(event.target.value)
        }}>
        </input>
        <Link to = '/' onClick= {()=>{
          onCheckOut()
        }}>
          checkout
        </Link>

      </form>
      }
     
      {!show && 
         <form>
          {/* <input type='text' placeholder ='input userID for book return'onChange={(event)=>{
          setUserID(event.target.value)
        }}>    
          </input> */}
          <Link to = '/' onClick= {()=>{
              onReturn();
            }}>
            return
          </Link>
        </form>
      }  
  </ul>
)}

export default Book