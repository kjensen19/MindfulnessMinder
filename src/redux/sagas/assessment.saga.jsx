import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rating(action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/user/rating', action.payload);

  } catch (error) {
    console.log('Error with Rating SAGA', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* ratingSaga() {
  yield takeLatest('POST_RATING', rating);
}

export default ratingSaga;