const assessmentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RATING':
        console.log('payload in set_rating?????', action.payload)
        return action.payload.data;
      case 'UNSET_RATING':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default assessmentReducer;