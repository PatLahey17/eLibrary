import {useLocation} from 'react-router-dom'

function Book (props){
  let location = useLocation()
  let book = location.state
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
  </ul>
)}

export default Book