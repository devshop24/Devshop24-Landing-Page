const server = require( 'express' )();
const routes = require( './routes' );
import app from "./app.js"
import config from './config';

const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

// TODO - import middleware

server.set( 'view engine', 'ejs' );
server.use( routes );


module.exports = server;