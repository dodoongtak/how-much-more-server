#!/usr/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import dotenv from 'dotenv';

/**
 * Module dependencies.
 */
import http from 'http';
import app from './app';

dotenv.config();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const nomralizePort = parseInt(val, 10);

  if (Number.isNaN(nomralizePort)) return val;
  if (nomralizePort >= 0) return nomralizePort;
  return false;
}

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

const debug = require('debug')('server:server');

const PORT = process.env.PORT || 8008;

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(PORT);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    process.exit(1);
    break;
  case 'EADDRINUSE':
    process.exit(1);
    break;
  default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
  debug(`Listening on ${bind}`);
}

app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
