const express = require('express');
const { getSupabase } = require('../services/supabase');
const { contactCreateSchema, contactUpdateSchema } = require('../utils/validator');
const { sendEmail } = require('../services/emailService');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const createLimiter = rateLimit({ windowMs: 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false });

router.post('/', createLimiter, async (req, res, next) => {
  try {
    const { error, value } = contactCreateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const err = new Error('Invalid contact payload');
      err.status = 400;
      err.code = 'INVALID_BODY';
      err.details = error.details.map((d) => d.message);
      throw err;
    }

    const supabase = getSupabase();
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    const payload = { name: value.name, email: value.email, phone: value.phone, company: value.company, subject: value.subject, message: value.message, ip, user_agent: userAgent };
    
    // Log the payload for debugging
    console.log('Inserting contact:', { 
      name: payload.name, 
      email: payload.email,
      subject: payload.subject,
      hasMessage: !!payload.message,
      ip: payload.ip
    });
    
    const { data, error: dbError } = await supabase
      .from('dwansyscontacts')
      .insert(payload)
      .select()
      .single();
    
    // Set CORS headers before any response
    if (req.header('origin')) {
      res.header('Access-Control-Allow-Origin', req.header('origin'));
      res.header('Access-Control-Allow-Credentials', 'true');
    }
    
    if (dbError) { 
      console.error('Database error:', dbError);
      const e = new Error(dbError.message); 
      e.status = 500; 
      throw e; 
    }

    // Send email asynchronously (non-blocking)
    sendEmail({ template: 'contact-form', data: value, req })
      .then(() => {
        if (req.log) req.log.info('Contact form email sent successfully');
      })
      .catch((emailErr) => {
        if (req.log) req.log.warn({ err: { message: emailErr.message } }, 'Failed to send contact email');
      });

    // Respond immediately after database operation
    res.status(201).json({ success: true, contact: data });
  } catch (err) { 
    // Ensure CORS headers are set for error responses
    if (req.header('origin')) {
      res.header('Access-Control-Allow-Origin', req.header('origin'));
      res.header('Access-Control-Allow-Credentials', 'true');
    }
    console.error('Contact form error:', err);
    next(err); 
  }
});

router.get('/', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('dwansyscontacts').select('*').order('created_at', { ascending: false });
    if (error) { const e = new Error(error.message); e.status = 500; throw e; }
    res.json({ contacts: data });
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('dwansyscontacts').select('*').eq('id', req.params.id).single();
    if (error) { const e = new Error(error.message); e.status = 404; throw e; }
    res.json({ contact: data });
  } catch (err) { next(err); }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { error, value } = contactUpdateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) { const e = new Error('Invalid body'); e.status = 400; e.code = 'INVALID_BODY'; throw e; }

    const supabase = getSupabase();
    const { data, error: dbError } = await supabase.from('dwansyscontacts').update(value).eq('id', req.params.id).select('*').single();
    if (dbError) { const e = new Error(dbError.message); e.status = 500; throw e; }
    res.json({ contact: data });
  } catch (err) { next(err); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('dwansyscontacts').delete().eq('id', req.params.id);
    if (error) { const e = new Error(error.message); e.status = 500; throw e; }
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;