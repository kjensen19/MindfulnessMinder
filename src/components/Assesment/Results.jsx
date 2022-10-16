import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
import RadarChart from "./ResultChart"
import { useSelector } from 'react-redux'
function Results() {
    const history = useHistory()
    
    return(
        <div>
            <h1>some info about your scores goes here</h1>
            <RadarChart />
            <Button variant="outlined" color="inherit" onClick={() => history.push('/user')}>Home</Button>
        </div>
    )
}
export default Results