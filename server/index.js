const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller');

app.use( bodyParser.json() );

app.use(express.static(__dirname + '/..public/build'))

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.deleting );

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );