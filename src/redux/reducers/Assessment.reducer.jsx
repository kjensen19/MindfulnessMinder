const assessmentReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_RATING':
        console.log('payload in set_rating?????', action.payload)
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