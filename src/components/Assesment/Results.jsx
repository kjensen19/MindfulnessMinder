import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
function Results() {
    const history = useHistory()
    return(
        <Button onClick={() => history.push('/user')}>Home</Button>
    )
}
export default Results