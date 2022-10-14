import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
function Results() {
    const history = useHistory()
    return(
        <div>
            <h1>some info about your scores goes here</h1>
            <h1> Pretty pretty chartJS results over time go here</h1>
            <Button variant="outlined" color="inherit" onClick={() => history.push('/user')}>Home</Button>
        </div>
    )
}
export default Results