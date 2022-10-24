import './Exercise.css'
import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import  Button  from '@mui/material/Button'



function Exercise(){
    const [showButtons, setShowButtons] = useState(true);
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()

    //on page load use param (id) to get details
    //on exit clear
    useEffect(() => {
        const exerciseId = params.id

        // dispatch({
        //     type: 'FETCH_EXERCISE_DETAILS',
        //     payload: exerciseId
        })

    //     return () => {
    //         dispatch({
    //             type: 'CLEAR_EXERCISE_DETAILS'
    //         })
    //     }
    // }, [params.id])

    return(
        <div className='circleFrame'>
            <h1 className='instructions'></h1>
            <div className="circle" onAnimationEnd={() => {setShowButtons(false)}}></div>
            <Stack direction="row" alignItems="flex-end" >
                <Button  className='postEx' onClick={() => setShowButtons(true)}hidden={showButtons}>Repeat</Button>
                <Button className='postEx'onClick={()=> history.push('/exerciseRes')} hidden={showButtons}>Complete</Button>
            </Stack>
        </div>
    )
}

export default Exercise