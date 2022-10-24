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
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Assessment() {
    const dispatch = useDispatch()
    const history = useHistory()
    let ratingBase = {physical:0, emotional:0, mental:0, psychosocial:0}
    const [newRating, setNewRating] = useState(ratingBase)

    const handleChange = e => {
        const { name, value } = e.target;
        setNewRating(newRating => ({
            ...newRating,
            [name]: Number(value)
        }));
    };

    const handleSubmit = () => {
        console.log('why not here?', newRating)
        dispatch({
            type: 'POST_RATING',
            payload: newRating
        })
        setNewRating(ratingBase)
        history.push('/results')

    }

  return (
    <List sx={{ width: '100%', maxWidth: 390, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Physical?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component={"span"}
                variant="body2"
                color="text.primary"
              >
                How are you feeling physically?
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
          <Avatar alt={newRating.physical.toString()} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Emotional?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component={"span"}
                variant="body2"
                color="text.primary"
              >
                How are you feeling emotionally?
              </Typography>
              <Rating
                name='emotional'
                value={newRating.emotional}
                onChange={handleChange}
                />
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar alt={newRating.emotional.toString()} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Mental"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component={"span"}
                variant="body2"
                color="text.primary"
              >
                How are you feeling mentally?
              </Typography>
              <Rating
                name='mental'
                value={newRating.mental}
                onChange={handleChange}
                />
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar alt={newRating.mental.toString()} src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="PsychoSocial"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component={"span"}
                variant="body2"
                color="text.primary"
              >
                How are you feeling psychosocially?
              </Typography>
              <Rating
                name='psychosocial'
                value={newRating.psychosocial}
                onChange={handleChange}
                />
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar alt={newRating.psychosocial.toString()} src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
      </ListItem>
      <Button type='submit' variant="outlined" color="inherit"  onClick={handleSubmit}>Submit</Button>
    </List>
  );
}


