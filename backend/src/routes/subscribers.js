const express = require('express');
const { getSupabase } = require('../services/supabase');
const { subscriberCreateSchema, subscriberUpdateSchema } = require('../utils/validator');
const { sendEmail } = require('../services/emailService');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const createLimiter = rateLimit({ windowMs: 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false });

router.post('/', createLimiter, async (req, res, next) => {
  try {
    const { error, value } = subscriberCreateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const err = new Error('Invalid subscriber payload');
      err.status = 400;
      err.code = 'INVALID_BODY';
      err.details = error.details.map((d) => d.message);
      throw err;
    }

    const supabase = getSupabase();
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    const payload = { email: value.email, ip, user_agent: userAgent };
    const { data, error: dbError } = await supabase
      .from('subscribers')
      .insert(payload)
      .select()
      .single();
    
    if (dbError) {
      if (dbError.code === '23505') { // Unique constraint violation
        const err = new Error('Email already subscribed');
        err.status = 409;
        err.code = 'EMAIL_EXISTS';
        throw err;
      }
      const e = new Error(dbError.message);
      e.status = 500;
      throw e;
    }

    // Send email asynchronously (non-blocking)
    sendEmail({ template: 'subscription', data: value, req })
      .then(() => {
        if (req.log) req.log.info('Subscription email sent successfully');
      })
      .catch((emailErr) => {
        if (req.log) req.log.warn({ err: { message: emailErr.message } }, 'Failed to send subscription email');
      });

    // Respond immediately after database operation
    res.status(201).json({ success: true, subscriber: data });
  } catch (err) { next(err); }
});

router.get('/', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('subscribers').select('*').order('created_at', { ascending: false });
    if (error) { const e = new Error(error.message); e.status = 500; throw e; }
    res.json({ subscribers: data });
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('subscribers').select('*').eq('id', req.params.id).single();
    if (error) { const e = new Error(error.message); e.status = 404; throw e; }
    res.json({ subscriber: data });
  } catch (err) { next(err); }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { error, value } = subscriberUpdateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) { const e = new Error('Invalid body'); e.status = 400; e.code = 'INVALID_BODY'; throw e; }

    const supabase = getSupabase();
    const { data, error: dbError } = await supabase.from('subscribers').update(value).eq('id', req.params.id).select('*').single();
    if (dbError) { const e = new Error(dbError.message); e.status = 500; throw e; }
    res.json({ subscriber: data });
  } catch (err) { next(err); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('subscribers').delete().eq('id', req.params.id);
    if (error) { const e = new Error(error.message); e.status = 500; throw e; }
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;