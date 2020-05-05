'use strict';


require('dotenv').load();

const express = require('express');
const http = require('http');
const path = require('path');
const { jwt: { AccessToken } } = require('twilio');

const VideoGrant = AccessToken.VideoGrant;

const MAX_ALLOWED_SESSION_DURATION = 14400;

// Create Express webapp.
const app = express();

// Set up the path for the quickstart.
const quickstartPath = path.join(__dirname, '../quickstart/public');
app.use('/quickstart', express.static(quickstartPath));


/**
 * Default to the Quick Start application.
 */
app.get('/', (request, response) => {
  response.redirect('/quickstart');
});

// dssd#
app.get('/whatsapp', (request, response) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID; 
  const authToken = process.env.TWILIO_AUTH_TOKEN; 
  const client = require('twilio')(accountSid, authToken); 

  const number = request.query.number;
   
  client.messages 
        .create({ 
           body: '*DESCOLAR:* Você tem uma aula de português agendada para as 10 horas! Não Falte', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:+' + number
         }) 
        .then(  message => function() {
          console.log(message.sid)
          response.send({ hello: 'world' })}) 
        .done();
  console.log("Envio whatsapp")       
  response.send({ status: 'Mensagem enviada com sucesso' })
});

app.get('/sms', (request, response) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID; 
  const authToken = process.env.TWILIO_AUTH_TOKEN; 
  const client = require('twilio')(accountSid, authToken); 
  const number = request.query.number;
   
 
client.messages 
      .create({ 
         body: 'DESCOLAR: Caro Aluno. O plantão AO VIVO de Dúvidas de Português esta agendado para o dia 05/05 as 09:00 horas. Não Falte',  
         messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE_ID,      
         to: number
       }) 
      .then(message => console.log(message.sid)) 
      .done();
  
  console.log("Envio SMS")       
  response.send({ status: 'Mensagem enviada com sucesso' })
});


/**
 * Generate an Access Token for a chat application user - it generates a random
 * username for the client requesting a token, and takes a device ID as a query
 * parameter.
 */
app.get('/token', function(request, response) {
  const { identity } = request.query;

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    { ttl: MAX_ALLOWED_SESSION_DURATION }
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  const grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string.
  response.send(token.toJwt());
});

// Create http server and run it.
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});
