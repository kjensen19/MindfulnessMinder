import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function ExerciseEnd() {
    const history = useHistory()
    const dispatch = useDispatch()

    //Not sure if I should use the same saga as PUT or
    //if I should make an additional saga to mark complete?
    //either way need to refetch after and hit home
    useEffect(() => {
        return () => {
            dispatch({
                type: 'COMPLETE_EXERCISE'
            })
        }
    })


    function handleClick(){
        history.push('/')
    }
    //Need some kind of graphic/display here + text
    return(
        <>
        <button onClick={handleClick}>Home</button>
        <div className="resContainer">
            <div id="panelOne">Great Job!</div>
            <div id="panelTwo">Feel Better?</div>
            <div id="imgContainer">
                <img src="../image/tulips.jpg" />
            </div>
        </div>
        
        </>
    )
}

export default ExerciseEnd