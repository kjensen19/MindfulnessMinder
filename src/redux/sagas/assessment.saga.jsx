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

function* assesment(){
  try{
    const response = yield axios.get('/api/rating')
    console.log('??? response', response)
    yield put({type: 'SET_RATING', payload: response.data[0]})
  } catch(error) {
    console.log('Error in assesment GET in assesment SAGA', error)
  }

}

function* ratingSaga() {
  yield takeLatest('POST_RATING', rating);
  yield takeLatest('SET_USER', assesment)
}

export default ratingSaga;