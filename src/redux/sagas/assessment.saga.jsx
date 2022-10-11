import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux'

function* rating() {
    const ratings = useSelector(store => store.assessment)
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/user/rating', ratings);

  } catch (error) {
    console.log('Error with Rating SAGA', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* ratingSaga() {
  yield takeLatest('POST_RATING', rating);
}

export default ratingSaga;