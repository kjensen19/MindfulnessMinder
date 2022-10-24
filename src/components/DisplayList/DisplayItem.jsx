import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react'
import EditDialog from './EditDialog';
import { useHistory } from 'react-router'


const iconArr = ['../image/2.png',"../image/40.png",'../image/25.png','../image/130.png']

function DisplayItem({ exercise, i }){
   const history = useHistory()

    return(
            <ListItem alignItems="flex-start" >
                <ListItemAvatar>
                    <Avatar alt={exercise.Description} src={iconArr[i]} />

                </ListItemAvatar>
                <ListItemText
                
                primary={exercise.Type + '  ' +  exercise.Duration
            }

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

                    </React.Fragment>
                    
                    }
                    onClick={() => history.push(`/exercise/${exercise.id}`)}
                />
                <EditDialog exercise={exercise}/>
            </ListItem>

    )
}

export default DisplayItem