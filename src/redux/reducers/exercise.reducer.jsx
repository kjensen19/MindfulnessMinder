const exerciseReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EXERCISE':
        console.log('data in set_exercise', action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default exerciseReducer;