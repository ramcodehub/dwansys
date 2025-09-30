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

// Set logging level to warn to reduce verbosity
const logger = pino({ level: process.env.LOG_LEVEL || 'warn' });
app.use(pinoHttp({ 
  logger,
  // Only log errors and warnings, not every request
  quietReqLogger: true,
  autoLogging: {
    ignore: (req) => {
      // Ignore health check and static file requests
      return req.url === '/health' || req.url === '/ping';
    }
  }
}));

// Add start time to requests for performance monitoring
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

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
      // Log CORS errors in development and production for debugging
      console.warn('CORS Origin not allowed:', { origin, allowedOrigins, env: process.env.NODE_ENV });
      callback(new Error('Not allowed by CORS'));
    }
    },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  preflightContinue: false
};

// Apply CORS middleware before any routes - this will handle OPTIONS requests automatically
app.use(cors(corsOptions));

// Remove our custom OPTIONS handler to avoid conflicts
// The cors middleware will handle preflight requests correctly

app.use(express.json({ limit: '1mb' }));

// Add a middleware to log incoming requests with origin information
app.use((req, res, next) => {
  // Log requests for debugging (only in production for critical info)
  if (process.env.NODE_ENV === 'development' || 
      (req.method !== 'GET' && req.method !== 'HEAD' && req.url !== '/health' && req.url !== '/ping')) {
    console.log('Incoming request:', {
      method: req.method,
      url: req.url,
      origin: req.header('origin'),
      userAgent: req.header('user-agent')
    });
  }
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
app.get('/ping', (req, res) => {
  const duration = Date.now() - req.startTime;
  res.json({ message: 'pong', timestamp: new Date().toISOString(), responseTime: duration });
});

// Routes
app.use('/api', emailRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/subscribers', subscribersRouter);

// 404 and Error handler
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // Simple startup message without verbose details
  console.log(`Backend server running on port ${PORT}`);
  // Log CORS origins for debugging
  const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
  const allowedOrigins = corsOrigin.split(',').map(origin => origin.trim());
  console.log(`CORS allowed origins: ${allowedOrigins.join(', ')}`);
});