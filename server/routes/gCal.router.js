const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
let events =''
const express = require('express');
const router = express.Router()
const calendar = google.calendar('v3');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');



// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = '/Users/kylejensen/Prime/Solo/MindfulnessMinder/server/oauth2.keys.json';


// router.get()

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('HERE??? req.body=', req.body)
    console.log('HERE req.user', req.user)

/** 
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
    async function loadSavedCredentialsIfExist() {
        try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
    }

/**
 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
    async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
    }

/**
 * Load or request or authorization to call APIs.
 *
 */
    async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
    }

/**
 * add event template
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
    function addEvents(auth) {
        console.log('in addEvents')
        // for(let event of req.body){
            const calDate = new Date()
            console.log('cal date', calDate)

            const eventz = ({
                'summary': 'Mindful Moment',
                'description': `Mental`,
                'start': {
                    'dateTime': `2022-10-24T16:30:00-05:00`,
                    'timeZone': 'America/Chicago',
                },
                'end':{
                    'dateTime': '2022-10-24T17:00:00-05:00',
                    'timeZone': 'America/Chicago',
                },
                'attendees' : [
                    {'email': `kjensen19@gmail.com`}
                ],
                'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10},
                ],
                },
        })
    //     const event = {
    //     'summary': 'Take a break!',
    //     'description': 'A chance to hear more about Google\'s developer products.',
    //     'start': {
    //     'dateTime': '2022-10-21T16:00:00-05:00',
    //     'timeZone': 'America/Chicago',
    //     },
    //     'end': {
    //     'dateTime': '2022-10-21T16:30:00-05:00',
    //     'timeZone': 'America/Chicago',
    //     },
    //     'attendees': [
    //     {'email': 'rjensen113@gmail.com'},
    //     {'email': 'kjensen19@gmail.com'},
    //     ],
    //     'reminders': {
    //     'useDefault': false,
    //     'overrides': [
    //         {'method': 'email', 'minutes': 24 * 60},
    //         {'method': 'popup', 'minutes': 10},
    //     ],
    //     },
    // };

            calendar.events.insert({
                auth: auth,
                calendarId: 'primary',
                resource: eventz,
            }, function(err, eventz) {
                if (err) {
                console.log('There was an error contacting the Calendar service: ' + err);
                return;
                }
                console.log('Event created: %s', eventz.htmlLink);
            }
)}












authorize().then(addEvents).catch(console.error);

res.sendStatus(201)});


// 2022-10-17 14:35:04.397636-05
// router.post('/',(req,res) =>{
//     async function loadSavedCredentialsIfExist() {
//         try {
//           const content = await fs.readFile(TOKEN_PATH);
//           const credentials = JSON.parse(content);
//           console.log(google.auth.fromJSON(credentials))
//           return google.auth.fromJSON(credentials);
//         } catch (err) {
//           return null;
//         }
//       }})


module.exports = router

// auth: auth,



// async function listEvents(auth) {
//     const calendar = google.calendar({version: 'v3', auth});
//     const res = await calendar.events.list({
//       calendarId: 'primary',
//       timeMin: new Date().toISOString(),
//       maxResults: 10,
//       singleEvents: true,
//       orderBy: 'startTime',
//     });
//     events = res.data.items;
//     if (!events || events.length === 0) {
//       console.log('No upcoming events found.');
//       return;
//     }
//     console.log('Upcoming 10 events:');
//     events.map((event, i) => {
//       const start = event.start.dateTime || event.start.date;
//       console.log(`${start} - ${event.summary}`);
      
//     });
//   }
