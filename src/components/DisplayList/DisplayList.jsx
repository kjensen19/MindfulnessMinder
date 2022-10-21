import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import DisplayItem from './DisplayItem';
import { Button } from '@mui/material';


function DisplayList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'FETCH_EXERCISE'});
    } , []);
 
    const exercises = useSelector(store => store.exercise.data)
    console.log ('exercise in List', exercises)
    let windowObjectReference = null;
    let previousUrl = null;
    const handleClick = () =>{
      console.log('HERE?')
      dispatch({type: 'ADD_EVENT', payload: exercises})


//       const receiveMessage = event => {
//         console.log('event?', event)
//     // Do we trust the sender of this message? (might be
//     // different from what we originally opened, for example).
//     if (event.origin !== BASE_URL) {
//       return;
//     }
//         const { data } = event;
//     // if we trust the sender and the source is our popup
//         if (data.source === '/oauth2callback') {
//       // get the URL params and redirect to our server to use Passport to auth/login
//           const { payload } = data;
//           console.log('????', payload)
//           const redirectUrl = `/api/gCal${payload}`;
//           window.location.pathname = redirectUrl;
//       }
//       };

//       const openSignInWindow = (url, name) => {
//    // remove any existing event listeners
//         window.removeEventListener('message', receiveMessage);

//    // window features
//         const strWindowFeatures =
//         'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

//         if (windowObjectReference === null || windowObjectReference.closed) {
//      /* if the pointer to the window object in memory does not exist
//       or if such pointer exists but the window was closed */
//         windowObjectReference = window.open(url, name, strWindowFeatures);
//    }    else if (previousUrl !== url) {
//      /* if the resource to load is different,
//       then we load it in the already opened secondary window and then
//       we bring such window back on top/in front of its parent window. */
//         windowObjectReference = window.open(url, name, strWindowFeatures);
//         windowObjectReference.focus();
//    }    else {
//      /* else the window reference must exist and the window
//       is not closed; therefore, we can bring it back on top of any other
//       window with the focus() method. There would be no need to re-create
//       the window or to reload the referenced resource. */
//         windowObjectReference.focus();
//    }

//    // add the listener for receiving a message from the popup
//       window.addEventListener('message', event => receiveMessage(event), false);
//    // assign the previous URL
//       previousUrl = url;
//  };
//   openSignInWindow('/oauth2callback', 'login')

    }

    //Need to abstract each exercise to DisplayItem to add Edit/Delete functionality

  

  return (
    <Paper elevation={10} sx={{ maxHeight: 844}} >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {exercises && exercises.map((exercise) => (
            <DisplayItem exercise={exercise} key={exercise.id} />
        ))}
        </List>
        <Button onClick={handleClick} color='inherit' variant='outline'>Add to Google Calendar</Button>
    </Paper>
  );
}

export default DisplayList
