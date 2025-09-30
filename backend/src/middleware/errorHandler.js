const redact = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [...obj] : { ...obj };
  const sensitiveKeys = ['password', 'pass', 'token', 'authorization', 'email_pass'];
  Object.keys(clone).forEach((key) => {
    if (sensitiveKeys.includes(key.toLowerCase())) {
      clone[key] = '[REDACTED]';
    } else if (typeof clone[key] === 'object') {
      clone[key] = redact(clone[key]);
    }
  });
  return clone;
};

function notFoundHandler(req, res, next) {
  // Ensure CORS headers are set for 404 responses
  if (req.header('origin')) {
    res.header('Access-Control-Allow-Origin', req.header('origin'));
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  res.status(404).json({ error: 'Not Found' });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const isProd = process.env.NODE_ENV === 'production';
  const message = status >= 500 ? (isProd ? 'Internal Server Error' : (err.message || 'Internal Server Error')) : err.message || 'Request failed';

  // Ensure CORS headers are set for error responses
  if (req.header('origin')) {
    res.header('Access-Control-Allow-Origin', req.header('origin'));
    res.header('Access-Control-Allow-Credentials', 'true');
  }

  if (req.log && typeof req.log.error === 'function') {
    req.log.error({
      err: { message: err.message, stack: err.stack, code: err.code },
      url: req.originalUrl,
      method: req.method,
      body: redact(req.body),
      query: redact(req.query),
      params: redact(req.params),
    }, 'Request error');
  } else {
    // Fallback console
    // eslint-disable-next-line no-console
    console.error(err);
  }

  const resp = { error: { code, message } };
  if (!isProd && err.details) resp.error.details = err.details;
  if (!isProd && err.cause && err.cause.message) resp.error.cause = err.cause.message;
  res.status(status).json(resp);
}

module.exports = { notFoundHandler, errorHandler };