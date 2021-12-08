import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookDetailsWithParams from '../BookDetails/BookDetailsWithParams';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  // const [bookList, setBookList] = useState([]);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    dispatch({ type: 'START_LOADING' });
    const books = (await axios.get('/books')).data;
    // setBookList(books);
    // dispatch our `books` to redux!
    dispatch({ type: 'DONE_LOADING' });
    dispatch({
      type: 'SET_BOOKS',
      payload: books,
    })
  }
  
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BookList fetchBooks={fetchBooks} />
          </Route>
          <Route path="/newbook">
            <BookForm fetchBooks={fetchBooks}/>
          </Route>
          <Route path="/details/:id">
            <BookDetailsWithParams />
          </Route>
          <Route path="/">
            404 Not Found
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;