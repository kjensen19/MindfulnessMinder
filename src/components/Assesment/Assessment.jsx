import RatingBar from "./RatingBar";
import * as React from 'react';
import { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function Assessment() {
    const [newRating, setNewRating] = useState({physical:3, emotional:3, mental:3, psychosocial:3})

    const handleChange = e => {
        const { name, value } = e.target;
        setNewRating(newRating => ({
            ...newRating,
            [name]: Number(value)
        }));
    };

    const handleSubmit = () => {

        console.log(newRating)
    }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Physical?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              <Rating
                name='physical'
                value={newRating.physical}
                onChange={handleChange}
                />
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Emotional?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
            </React.Fragment>
          }
        />
           <Rating
                name='emotional'
                value={newRating.emotional}
                onChange={handleChange}
                />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Mental"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
            </React.Fragment>
          }
        />
            <Rating
                name='mental'
                value={newRating.mental}
                onChange={handleChange}
                />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="PsychoSocial"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
            </React.Fragment>
          }
        />
            <Rating
                name='psychosocial'
                value={newRating.psychosocial}
                onChange={handleChange}
                />
      </ListItem>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </List>
  );
}


