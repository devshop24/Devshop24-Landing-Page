const express = require( 'express' );
const routes = require( './routes' );
const middleware = require( './middleware' );
const mongoose = require( 'mongoose' );
const config = require( './config' );

const { MONGO_URI, MONGO_DB_NAME } = config;
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) 
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


const server = express();

server.set( 'view engine', 'ejs' );
server.use( express.static( __dirname + '/static' ));
server.use( middleware );
server.use( routes );

module.exports = server;