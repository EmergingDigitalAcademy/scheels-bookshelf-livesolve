export const loadingReducer = (state=false, action) => {
   if (action.type === 'START_LOADING') {
      return true;
   } else if (action.type === 'DONE_LOADING') {
      return false;
   }
   return state;
}