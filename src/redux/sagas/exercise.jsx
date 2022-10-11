import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchExercise() {
  try {
    yield axios.get('/api/exercise');
    yield put({type: 'SET_EXERCISE', payload: response.data})


    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
  } catch (error) {
    console.log('Exercise get request failed', error);
  }
}

function* exerciseSaga() {
  yield takeLatest('FETCH_EXERCISE', fetchExercise);
}

export default exerciseSaga;