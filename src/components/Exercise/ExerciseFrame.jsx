import './Exercise.css'
import { useState } from 'react'
import Stack from '@mui/material/Stack';


function Exercise(){
    const [showButtons, setShowButtons] = useState(true);

    return(
        <div className='circleFrame'>
            <div className="circle" onAnimationEnd={() => {setShowButtons(false)}}></div>
            <Stack direction="row" alignItems="flex-end" >
                <button className='postEx' hidden={showButtons}>Repeat</button>
                <button className='postEx' hidden={showButtons}>Complete</button>
            </Stack>
        </div>
    )
}

export default Exercise