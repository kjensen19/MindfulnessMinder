import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* UpdateExercise(action) {
    const updatedExercise = action.payload
    const idToUpdate = action.payload.id
    console.log(`updated exercise: ${updatedExercise}, idToUpdate: ${idToUpdate}`)
  try {
    // passes the username and password from the payload to the server
    yield axios.put(`/api/exercise/${idToUpdate}`, updatedExercise);
    yield put({type: 'FETCH_EXERCISE' })

  } catch (error) {
    console.log('Error with Rating SAGA', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* updateExerciseSaga() {
  yield takeLatest('UPDATE_EXERCISE', UpdateExercise);
}

export default updateExerciseSaga;