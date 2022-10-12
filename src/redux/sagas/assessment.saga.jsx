import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux'

function* rating(action) {
    const ratings = action.payload
    console.log(ratings)
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/rating', ratings);

  } catch (error) {
    console.log('Error with Rating SAGA', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* ratingSaga() {
  yield takeLatest('POST_RATING', rating);
}

export default ratingSaga;