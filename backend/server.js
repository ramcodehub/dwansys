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
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true }));
app.use(express.json({ limit: '1mb' }));

// Basic rate limit for all routes
const globalLimiter = rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true, legacyHeaders: false });
app.use(globalLimiter);

// Health
app.get('/health', (req, res) => res.json({ ok: true }));

// Routes
app.use('/api', emailRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/subscribers', subscribersRouter);

// 404 and Error handler
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info({ port: PORT, env: process.env.NODE_ENV }, 'Backend server running');
});


