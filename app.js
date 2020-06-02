import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import bodyParser from 'body-parser';

// routes
import subRoutes from "./routes/subscribers";

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


  //routes
  app.use("/api/subscribers", subRoutes)



export default app;
