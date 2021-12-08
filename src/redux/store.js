import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { booksReducer } from './reducers/books.reducer';
import { loadingReducer } from './reducers/loading.reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/books.saga';

let sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeInstance = createStore(
   combineReducers({
      books: booksReducer,
      isLoading: loadingReducer,
   }),
   composeEnhancers(applyMiddleware(sagaMiddleware))
);

// only run this one time
sagaMiddleware.run(rootSaga);

export default storeInstance;