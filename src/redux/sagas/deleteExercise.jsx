import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from 'react-redux'

function* DeleteExercise(action) {
    const idToDelete = action.payload
    console.log(`idToDelete: ${idToDelete}`)
  try {
    // passes the username and password from the payload to the server
    yield axios.delete(`/api/exercise/${idToDelete}`);
    yield put({type: 'FETCH_EXERCISE' })

  } catch (error) {
    console.log('Error with DELETE SAGA', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* deleteExerciseSaga() {
  yield takeLatest('DELETE_EXERCISE', DeleteExercise);
}

export default deleteExerciseSaga;