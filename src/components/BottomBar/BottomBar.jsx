import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';


// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)],
//   );
// }

export default function BottomBar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} onClick={() => dispatch({ type: 'ADD_EVENT' })}/>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={() => dispatch({type: 'FETCH_GCAL'})}/>
          <BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={() => dispatch({type: 'LOGOUT'})}/>
        </BottomNavigation>
      </Paper>
    </Box>
  )};
