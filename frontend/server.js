const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
//const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
//const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
//const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

//const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
//const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
//const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;


app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

app.listen(process.env.PORT, () => console.log('token server running on 8081'));
