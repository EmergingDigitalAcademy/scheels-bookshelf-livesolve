import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchBooks(action) {
   try {
      yield put({ type: 'START_LOADING'})
      const response = yield axios.get('/books');
      yield put({
         type: 'SET_BOOKS',
         payload: response.data,
      })
      yield put({ type: 'DONE_LOADING'})
   } catch (error) {
      console.log(error);
   }
}

function* deleteBook(action) {
   try {
      yield axios.delete(`/books/${action.payload}`);
      yield put({type: 'FETCH_BOOKS'})
   } catch (error) {
      console.log(error);
   }
}

function* addBook(action) {
   try {
      // payload should be { title: '...', author: '...' }
      yield axios.post(`/books/`, action.payload);
      yield put({type: 'FETCH_BOOKS'})
   } catch (error) {
      console.log(error);
   }
}

export function* rootSaga() {
   yield takeEvery('FETCH_BOOKS', fetchBooks);
   yield takeEvery('DELETE_BOOK', deleteBook);
   yield takeEvery('ADD_BOOK', addBook);
}