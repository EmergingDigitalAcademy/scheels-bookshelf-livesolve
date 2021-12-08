import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import rollerImage from './roller.gif';

function BookList({fetchBooks}) {
  const history = useHistory();
  const bookList = useSelector(state => state.books);
  const colorGuide = {
    WHITE: 'white',
    BLUE: 'DodgerBlue'
  }
  const myStyle = {
      color: colorGuide.WHITE,
      backgroundColor: colorGuide.BLUE,
      borderRadius: 5,
      padding: "10px",
      fontFamily: "Arial"
    };

  const isLoading = useSelector( state => state.isLoading);
  
  async function deleteBook(bookId) {
    await axios.delete(`/books/${bookId}`);
    fetchBooks();
  }

  //process.env.REACT_APP_API_URL === 'production' 
  
  return (
    <section>
      <h2>All Books</h2>
      {isLoading 
          ? (Math.random() < .8 
            ? <img src="https://miro.medium.com/max/978/0*NfFRP_WMxD-XT14o.gif" alt="hint: its a chicken" />
            : <img src={rollerImage} alt='deos favorite' />
            )
          : (
            <ul>
              {bookList.map((book, index) =>
                <li key={index}>{book.title} by {book.author} <br />
                  <button style={myStyle} onClick={() => history.push(`/details/${book.id}`)}>View Details</button>
                  <button style={{...myStyle, backgroundColor: 'red', color:'yellow'}} onClick={() => deleteBook(book.id)}>Delete</button>
                </li>
              )}
            </ul>
          )
      }
      
    </section>
  );
}

export default BookList;