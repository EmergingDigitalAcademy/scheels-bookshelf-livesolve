import { createStore, combineReducers } from 'redux';
import { booksReducer } from './reducers/books.reducer';
import { loadingReducer } from './reducers/loading.reducer';

const storeInstance = createStore(
   combineReducers({
      books: booksReducer,
      isLoading: loadingReducer,
   }),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default storeInstance;