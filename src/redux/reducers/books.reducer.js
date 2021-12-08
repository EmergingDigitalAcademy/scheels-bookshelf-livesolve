const defaultState = []
export const booksReducer = (state = defaultState, action) => {
    if (action.type === 'SET_BOOKS') {
        // action.payload should be an array of book objects
        // like: [{title: '', author: ''}, {title: '...', author: '...'}]
        return action.payload;
    } else if (action.type === 'RESET_BOOKS') {
        // this action isnt used but its here for reference
        return defaultState;
    } else if (action.type === 'ADD_BOOK') {
       // this could be used if we added a book and didnt want to do a full refresh
       return [...state, action.payload]
    }
    return state;
}