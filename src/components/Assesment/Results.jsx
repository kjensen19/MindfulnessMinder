import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
import RadarChart from "./ResultChart"
import { useSelector } from 'react-redux'
function Results() {
    const history = useHistory()
    const results = useSelector(store => store.assesment)
    
    return(
        <div>
            <h1>Results:</h1>
            <ul>
                <li>Physical stress rating {results.physical}</li>
                <li>Emotional stress rating {results.emotional}</li>
                <li>Mental stress rating {results.mental}</li>
                <li>Psychosocial stress rating {results.psychosocial}</li>
            </ul>
            <Button variant="outlined" color="inherit" onClick={() => history.push('/user')}>Home</Button>
            <RadarChart />
        </div>
    )
}
export default Results