require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const pino = require('pino');
const pinoHttp = require('pino-http');

const emailRouter = require('./src/routes/email');
const contactsRouter = require('./src/routes/contacts');
const subscribersRouter = require('./src/routes/subscribers');
const { notFoundHandler, errorHandler } = require('./src/middleware/errorHandler');

const app = express();

// Logging
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
app.use(pinoHttp({ logger }));

// Security & Basics
app.use(helmet());

// Configure CORS to allow multiple origins
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Get allowed origins from environment variable
    const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
    const allowedOrigins = corsOrigin.split(',').map(origin => origin.trim());
    
    // Check if the origin is in our allowed list OR if it's undefined (for same-origin requests)
    // Also allow if the origin is null or undefined
    if (allowedOrigins.indexOf(origin) !== -1 || !origin || origin === 'null') {
      callback(null, true);
    } else {
      // Log the origin for debugging purposes
      logger.warn({ origin, allowedOrigins }, 'CORS Origin not allowed');
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

// Explicitly handle preflight OPTIONS requests
app.options('*', cors(corsOptions));

// Add a middleware to log all requests for debugging
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url, origin: req.get('origin') }, 'Incoming request');
  next();
});

// Basic rate limit for all routes
const globalLimiter = rateLimit({ 
  windowMs: 60 * 1000, 
  max: 120, 
  standardHeaders: true, 
  legacyHeaders: false,
  message: {
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests, please try again later.'
    }
  }
});
app.use(globalLimiter);

// Health
app.get('/health', (req, res) => res.json({ ok: true }));
app.get('/ping', (req, res) => res.json({ message: 'pong', timestamp: new Date().toISOString() }));

// Routes
app.use('/api', emailRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/subscribers', subscribersRouter);

// 404 and Error handler
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info({ port: PORT, env: process.env.NODE_ENV, corsOrigins: process.env.CORS_ORIGIN }, 'Backend server running');
});