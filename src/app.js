import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import router from './routes/router.conf';

const app = express();

const whiteLists = ['https://howmuchmore.xyz/', 'http://localhost:8080'];

const corsOptionsDelegate = (origin, callback) => {
  let corsOptions;

  if (whiteLists.indexOf(origin.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.disable('x-powered-by');

app.use(cors(corsOptionsDelegate));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send({ message: err.message, error: err });
  });
} else {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send({ message: err.message, error: {} });
  });
}

export default app;
