import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import DisplayItem from './DisplayItem';


function DisplayList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'FETCH_EXERCISE'});
    } , []);
 
    const exercises = useSelector(store => store.exercise.data)
    console.log ('exercise in List', exercises)

    //Need to abstract each exercise to DisplayItem to add Edit/Delete functionality

    // {movies.map((movie) => (
    //     <Paper elevation={10}>
    //         <MovieItem movie={movie} />
    //     </Paper>
    // ))}

  return (
    <Paper variant='outlined' sx={{ maxWidth: 390, maxHeight: 844}} >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {exercises && exercises.map((exercise) => (
            <DisplayItem exercise={exercise}/>
        ))}
        </List>
       
    </Paper>
  );
}

export default DisplayList
