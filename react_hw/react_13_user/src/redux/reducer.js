
const initialState = {
    users: ['Alice', 'Bob', 'Charlie', 'David'],
    filter: ''
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  