import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react'
import EditDialog from './EditDialog';
import { useHistory } from 'react-router'


function DisplayItem({ exercise }){
   const history = useHistory()

    return(
        
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            
            <ListItemText
            primary={exercise.Type}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component={"span"}
                    variant="body2"
                    color="text.primary"
                >
                    {exercise.Description}
                </Typography>
                {exercise.Duration}
                
                </React.Fragment>
                }
                onClick={() => history.push(`/exercise/${exercise.id}`)}
            />
            <EditDialog exercise={exercise}/>
        </ListItem>
    )
}

export default DisplayItem