const express = require('express');
const { getSupabase } = require('../services/supabase');
const { subscriberCreateSchema, subscriberUpdateSchema } = require('../utils/validator');
const { sendEmail } = require('../services/emailService');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const createLimiter = rateLimit({ windowMs: 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false });

router.post('/', createLimiter, async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = subscriberCreateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ 
        error: { 
          code: 'INVALID_BODY', 
          message: 'Invalid subscriber payload',
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
      email: value.email, 
      ip, 
      user_agent: userAgent 
    };

    // Insert into database
    console.log('Attempting to insert subscriber:', payload);
    const { data, error: dbError } = await supabase
      .from('subscribers')  // Make sure this table exists
      .insert(payload)
      .select()
      .single();
    
    if (dbError) {
      console.error('Database error in subscribers route:', dbError);
      if (dbError.code === '23505') { // Unique constraint violation
        return res.status(409).json({ 
          error: { 
            code: 'EMAIL_EXISTS', 
            message: 'Email already subscribed'
          } 
        });
      }
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to save subscription',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        } 
      });
    }

    console.log('Subscriber inserted successfully:', data);

    // Send email asynchronously (non-blocking)
    sendEmail({ template: 'subscription', data: value, req })
      .then(() => {
        console.log('Subscription email sent successfully');
      })
      .catch((emailErr) => {
        console.warn('Failed to send subscription email:', emailErr.message);
      });

    // Respond with success
    res.status(201).json({ success: true, subscriber: data });
  } catch (err) { 
    console.error('Unexpected error in subscribers route:', err);
    res.status(500).json({ 
      error: { 
        code: 'INTERNAL_ERROR', 
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      } 
    });
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = subscriberUpdateSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ 
        error: { 
          code: 'INVALID_BODY', 
          message: 'Invalid subscriber payload',
          details: error.details.map((d) => d.message)
        } 
      });
    }

    // Get Supabase client
    const supabase = getSupabase();

    // Prepare payload
    const payload = { 
      email: value.email, 
      user_agent: req.headers['user-agent'] || null
    };

    // Update in database
    const { data, error: dbError } = await supabase
      .from('subscribers')
      .update(payload)
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (dbError) {
      console.error('Database error in subscribers route:', dbError);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to update subscription',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        } 
      });
    }

    // Respond with success
    res.status(200).json({ success: true, subscriber: data });
  } catch (err) { 
    console.error('Unexpected error in subscribers route:', err);
    res.status(500).json({ 
      error: { 
        code: 'INTERNAL_ERROR', 
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      } 
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    // Get Supabase client
    const supabase = getSupabase();

    // Delete from database
    const { data, error: dbError } = await supabase
      .from('subscribers')
      .delete()
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (dbError) {
      console.error('Database error in subscribers route:', dbError);
      return res.status(500).json({ 
        error: { 
          code: 'DATABASE_ERROR', 
          message: 'Failed to delete subscription',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        } 
      });
    }

    // Respond with success
    res.status(200).json({ success: true, subscriber: data });
  } catch (err) { 
    console.error('Unexpected error in subscribers route:', err);
    res.status(500).json({ 
      error: { 
        code: 'INTERNAL_ERROR', 
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      } 
    });
  }
});

module.exports = router;
