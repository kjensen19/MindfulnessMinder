import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const history = useHistory()
  return (
    <div className="container">
      <div>
        <h3>Tech used:</h3>
        <ul>
          <li>HTML/CS</li>
          <li>Javascript</li>
          <li>MaterialUI</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>ChartJS</li>
          <li>Google Oauth2</li>
          <li>Google Calendar API</li>
        </ul>
        <p>Thank you to my family all of L'Engle, our instructor Matt, and the rest of the Prime staff for their support, encouragment, and inspiration.</p>
        <p>Please feel free to reach out and connect on LinkedIn:</p>
        <h2>www.linkedin.com/in/kyle-jensen-solutions</h2>

      </div>
    </div>
  );
}

export default AboutPage;

// { <p>There is no shortage of mediation, mindfulness and mental health 
//  boosting applications out there- but most of them require a 
// significant time investment. 10, 15, 30 minutes of guided 
// mindfulness practice is incredibly valuable as a practice. 
// Unfortunately sometimes you only have a minute which is 
// where Mindfulness Minder comes in, providing snack-sized bites 
// of mindfulness through the day when you need a quick moment to 
// reconnect to yourself, to re-ground, or to break up the grind. 
// If you are anything like me, and you probably are thanks to 
// selection bias, then you might struggle remembering to step away
// from your binge-coding, er work on your latest project. This is 
// where MM can supplement other well-being apps by providing brief 
// opportunities to focus on healthy practices throughout the day. </p>}
