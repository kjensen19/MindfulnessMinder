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
                <li>Physical stress rating {results.area_one}</li>
                <li>Emotional stress rating {results.area_two}</li>
                <li>Mental stress rating {results.area_three}</li>
                <li>Psychosocial stress rating {results.area_four}</li>
            </ul>
            <Button variant="outlined" color="inherit" onClick={() => history.push('/user')}>Home</Button>
            <RadarChart />
        </div>
    )
}
export default Results