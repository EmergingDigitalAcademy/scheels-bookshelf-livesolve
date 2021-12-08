import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookDetailsWithParams from '../BookDetails/BookDetailsWithParams';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  // const [bookList, setBookList] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS' })
  }, []);

  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BookList />
          </Route>
          <Route path="/newbook">
            <BookForm />
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