import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Results from '../Assesment/Results';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import BottomBar from '../BottomBar/BottomBar';
import Assessment from '../Assesment/Assessment';
import Exercise from '../Exercise/ExerciseFrame';
import ExerciseEnd from '../Exercise/ExerciseEnd';
import DisplayList from '../DisplayList/DisplayList';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import './App.css';
const themeOptions = createTheme( {
  palette: {
    type: 'dark',
    primary: {
      main: '#ce93d8',
      contrastText: '#252425',
    },
    secondary: {
      main: '#2187bb',
    },
    background: {
      default: '#ba68c8',
      paper: '#6200ea',
    },
    text: {
      primary: '#fff3e0',
      secondary: '#757575',
      hint: '#ffebee',
      disabled: '#ffebee',
    },
    info: {
      main: '#9dffaf',
      contrastText: 'rgba(10,10,10,0.87)',
    },
    divider: '#ffffff',
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const results = useSelector(store => store.assesment)
  console.log('Results in App:',results)
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

//   let windowObjectReference = null;
//   let previousUrl = null;

//   const receiveMessage = event => {
//     // Do we trust the sender of this message? (might be
//     // different from what we originally opened, for example).
//     // if (event.origin !== BASE_URL) {
//     //   return;
//     // }
//     const { data } = event;
//     // if we trust the sender and the source is our popup
//     if (data.source === '/login') {
//       // get the URL params and redirect to our server to use Passport to auth/login
//       const { payload } = data;
//       const redirectUrl = `/login${payload}`;
//       window.location.pathname = redirectUrl;
//     }
//    };

//   const openSignInWindow = (url, name) => {
//    // remove any existing event listeners
//    window.removeEventListener('message', receiveMessage);

//    // window features
//    const strWindowFeatures =
//      'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

//    if (windowObjectReference === null || windowObjectReference.closed) {
//      /* if the pointer to the window object in memory does not exist
//       or if such pointer exists but the window was closed */
//      windowObjectReference = window.open(url, name, strWindowFeatures);
//    } else if (previousUrl !== url) {
//      /* if the resource to load is different,
//       then we load it in the already opened secondary window and then
//       we bring such window back on top/in front of its parent window. */
//      windowObjectReference = window.open(url, name, strWindowFeatures);
//      windowObjectReference.focus();
//    } else {
//      /* else the window reference must exist and the window
//       is not closed; therefore, we can bring it back on top of any other
//       window with the focus() method. There would be no need to re-create
//       the window or to reload the referenced resource. */
//      windowObjectReference.focus();
//    }

//    // add the listener for receiving a message from the popup
//    window.addEventListener('message', event => receiveMessage(event), false);
//    // assign the previous URL
//    previousUrl = url;
//  };
//  openSignInWindow('/api/gCal', 'Kyle')


  return (
    <Router>
      <ThemeProvider theme={themeOptions}>
        <div>
          <HeaderMenu />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              {results ?
              <Results />
              :
              <Redirect to="/assessment"/> 
              }
            </ProtectedRoute>
            <ProtectedRoute exact path="/assessment">
              {results ?
              <Redirect to="/info" />
              :
              <Assessment /> 
              }
            </ProtectedRoute>
            <ProtectedRoute
              path="/exercise"
              >
                <Exercise />
              </ProtectedRoute>
              <ProtectedRoute
                exact path="/exerciseRes"
              >
                <ExerciseEnd />
              </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <BottomBar />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
