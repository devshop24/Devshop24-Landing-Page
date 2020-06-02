const server = require( 'express' )();
const routes = require( './routes' );


// TODO - import middleware

server.set( 'view engine', 'ejs' );
server.use( routes );


module.exports = server;