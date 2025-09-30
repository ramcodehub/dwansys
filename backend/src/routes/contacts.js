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
    console.log('Attempting to insert contact:', payload);
    const { data, error: dbError } = await supabase
      .from('dwansyscontacts')  // Make sure this table exists
      .insert(payload)
      .select()
      .single();
    
    if (dbError) { 
      console.error('Database error in contacts route:', dbError);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to save contact information',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        } 
      });
    }

    console.log('Contact inserted successfully:', data);

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
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      } 
    });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('dwansyscontacts')
      .select('*');

    if (error) {
      console.error('Database error in contacts route:', error);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to retrieve contact information'
        } 
      });
    }

    res.status(200).json(data);
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

router.get('/:id', async (req, res, next) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('dwansyscontacts')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) {
      console.error('Database error in contacts route:', error);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to retrieve contact information'
        } 
      });
    }

    res.status(200).json(data);
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

router.put('/:id', async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = contactUpdateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
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
    const payload = { 
      name: value.name, 
      email: value.email, 
      phone: value.phone, 
      company: value.company, 
      subject: value.subject, 
      message: value.message, 
    };

    // Update in database
    const { data, error: dbError } = await supabase
      .from('dwansyscontacts')
      .update(payload)
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (dbError) { 
      console.error('Database error in contacts route:', dbError);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to update contact information'
        } 
      });
    }

    // Respond with success
    res.status(200).json({ success: true, contact: data });
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

router.delete('/:id', async (req, res, next) => {
  try {
    // Get Supabase client
    const supabase = getSupabase();

    // Delete from database
    const { data, error } = await supabase
      .from('dwansyscontacts')
      .delete()
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (error) { 
      console.error('Database error in contacts route:', error);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to delete contact information'
        } 
      });
    }

    // Respond with success
    res.status(200).json({ success: true, contact: data });
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

module.exports = router;
