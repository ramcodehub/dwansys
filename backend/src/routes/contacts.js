const express = require('express');
const { getSupabase } = require('../services/supabase');
const { contactCreateSchema, contactUpdateSchema } = require('../utils/validator');
const { sendEmail } = require('../services/emailService');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const createLimiter = rateLimit({ windowMs: 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false });

router.post('/', createLimiter, async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = contactCreateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ 
        error: { 
          code: 'INVALID_BODY', 
          message: 'Invalid contact payload',
          details: error.details.map((d) => d.message)
        } 
      });
    }

    // Get Supabase client
    const supabase = getSupabase();
    
    // Prepare payload
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    const payload = { 
      name: value.name, 
      email: value.email, 
      phone: value.phone, 
      company: value.company, 
      subject: value.subject, 
      message: value.message, 
      ip, 
      user_agent: userAgent 
    };

    // Insert into database
    const { data, error: dbError } = await supabase
      .from('dwansyscontacts')
      .insert(payload)
      .select()
      .single();
    
    if (dbError) { 
      console.error('Database error in contacts route:', dbError);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to save contact information'
        } 
      });
    }

    // Send email asynchronously (non-blocking)
    sendEmail({ template: 'contact-form', data: value, req })
      .then(() => {
        console.log('Contact form email sent successfully');
      })
      .catch((emailErr) => {
        console.warn('Failed to send contact email:', emailErr.message);
      });

    // Respond with success
    res.status(201).json({ success: true, contact: data });
  } catch (err) { 
    console.error('Unexpected error in contacts route:', err);
    res.status(500).json({ 
      error: { 
        code: 'INTERNAL_ERROR', 
        message: 'An unexpected error occurred'
      } 
    });
  }
});

// ... keep the rest of the routes as they are ...