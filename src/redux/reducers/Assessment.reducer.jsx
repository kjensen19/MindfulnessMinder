const assessmentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RATING':
        return action.payload;
      case 'UNSET_RATING':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default assessmentReducer;