import {Link} from 'react-router-dom'

function Books ({books}) {

  let bookList = books;
  // {props} deconstructed, prop = {listOfBooks} from App.js inside the Books component placement, prop = was set
return (
  <div>
    {
      bookList.map(book=> {
        
        let checked = ''
        if (book.checked_out){
          checked = 'unavailable'
        } else {
          checked = 'available'
        }
        return (
          <Link to = {{pathname:'/book', 
            state: {
              title:book.title,
              author:book.author,
              ISBN:book.ISBN,
              checkedOut:book.checked_out,
              checked:checked
              // we need userID here?
            }
          }}>
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
                {checked}
              </li>
            </ul>
          </Link>
         

        )
      } )
    }
  </div>
)
}

export default Books