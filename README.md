# FS Redux (Sagas, Router, Details View)

Pull down the code, npm install and setup a database called `fs-redux-books` w/ the provided `database.sql` file. 

Video of this development:
https://vimeo.com/511211219/f79152bb1a

The `main` branch has an example of redux, sagas, react-router, AND a details view (done two ways) -- one simple details view using redux, and one using the same strategy but supporting url parameters like `/details/10`.

See the `no-sagas` branch for the example code prior to the update that added sagas, react-router, and details view.

## TODO:
[ ] Install redux, configure the store, set up the boilerplate
[ ] Create a reducer to manage our array of books
[ ] Replace our `bookList` in local state, with redux
[ ] Replace all of the props where `bookList` is being passed down, with redux

## Stretch:
[ ] Install and set up redux-saga middleware
[ ] Replace the FETCH with a redux saga
[ ] Replace the POST with a redux saga
[ ] Replace the DELETE with a redux saga