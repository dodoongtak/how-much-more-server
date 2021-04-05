// Dependencies
import express from 'express';

const globalRouter = express.Router();

/// Method: Get, Route '/'
globalRouter.get('/', (req, res) => {
  res.json('index page');
});

export default globalRouter;
