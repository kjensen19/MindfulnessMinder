import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useSelector } from 'react-redux'


function* fetchGCalendar() {
  try {
    const response =   axios({
        method: 'GET',
        url: '/api/gCal'
      }).then((response) => {
        console.log('get response: ', response.data)
      }).catch((error) => {
        console.log('client side get error', error)
      })
    }
    
    
    
    
    
    


    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
   catch (error) {
    console.log('Exercise get request failed', error);
  }
}

function* addEvent() {
  const exercises = useSelector(store => store.exercise.data)

    try {
        const addedEvent = axios({
            method: 'POST',
            url: '/api/gCal',
            data: exercises

        }).then((response) => {
            console.log('EVENT Response in SAGA:', response)
        }).catch((error) => {
            console.log('ERROR ADDING EVENT', error)
        })
    }
    catch(error){
        console.log('Game over man, game over', error)
    }
}

function* gCalSaga() {
  yield takeLatest('FETCH_GCAL', fetchGCalendar);
  yield takeLatest('ADD_EVENT', addEvent)
}



export default gCalSaga;