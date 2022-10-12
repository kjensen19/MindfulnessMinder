import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react'
import EditDialog from './EditDialog';


function DisplayItem({ exercise }){
    function handleClick(){
        
    }

    return(
        <>
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
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {exercise.Description}
                </Typography>
                {exercise.Duration}
                
                </React.Fragment>
                }
            />
            <EditDialog exercise={exercise}/>
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    )
}

export default DisplayItem