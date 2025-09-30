const nodemailer = require('nodemailer');

function delay(ms) { return new Promise((res) => setTimeout(res, ms)); }

async function initializeTransporter(req) {
  const host = process.env.SMTP_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!host || !user || !pass) {
    const e = new Error('SMTP configuration missing: ensure SMTP_HOST, EMAIL_USER, EMAIL_PASS are set');
    e.status = 500;
    throw e;
  }

  const envPort = Number(process.env.SMTP_PORT);
  const envSecure = String(process.env.SMTP_SECURE || '').toLowerCase();
  const preferSecure = envSecure === 'true' || envSecure === '1' || envSecure === 'yes';

  const common = {
    host,
    auth: { user, pass },
    connectionTimeout: 5000, // 5 seconds
    greetingTimeout: 5000,   // 5 seconds
    socketTimeout: 5000,     // 5 seconds
    // Add connection pooling
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5
  };

  const attempts = [];
  if (envPort) {
    attempts.push({ port: envPort, secure: preferSecure });
  }
  // Fallbacks
  attempts.push({ port: 587, secure: false });
  attempts.push({ port: 465, secure: true });

  let lastErr;
  for (const cfg of attempts) {
    const transporter = nodemailer.createTransport({ ...common, ...cfg });
    try {
      // Add a timeout to the verification
      const verifyPromise = transporter.verify();
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('SMTP verification timeout')), 10000);
      });
      
      await Promise.race([verifyPromise, timeoutPromise]);
      
      if (req && req.log) req.log.info({ smtp: { host, port: cfg.port, secure: cfg.secure } }, 'SMTP verified');
      return transporter;
    } catch (err) {
      lastErr = err;
      if (req && req.log) req.log.warn({ smtp: { host, port: cfg.port, secure: cfg.secure }, err: { message: err.message } }, 'SMTP verify failed');
    }
  }
  const e = new Error('Failed to initialize SMTP transporter');
  e.status = 502;
  e.cause = lastErr;
  throw e;
}

function generateContactFormEmail(data) {
  const safe = (v) => String(v || '').replace(/[<>]/g, '');
  return `
  <div style="font-family:Arial,Helvetica,sans-serif; max-width:640px; margin:0 auto; border:1px solid #e5e7eb;">
    <div style="background:#111827; color:#fff; padding:16px 20px;">
      <h2 style="margin:0;">New Contact Request</h2>
    </div>
    <div style="padding:20px;">
      <p><strong>Name:</strong> ${safe(data.name)}</p>
      <p><strong>Email:</strong> ${safe(data.email)}</p>
      <p><strong>Phone:</strong> ${safe(data.phone)}</p>
      <p><strong>Company:</strong> ${safe(data.company)}</p>
      <p><strong>Subject:</strong> ${safe(data.subject)}</p>
      <div style="margin-top:12px; padding:12px; background:#f9fafb; border:1px solid #e5e7eb; white-space:pre-wrap;">
        ${safe(data.message)}
      </div>
    </div>
    <div style="padding:12px 20px; font-size:12px; color:#6b7280; border-top:1px solid #e5e7eb;">
      Sent via Dwansys Contact Form
    </div>
  </div>`;
}

function generateSubscriptionEmail(data) {
  const safe = (v) => String(v || '').replace(/[<>]/g, '');
  return `
  <div style="font-family:Arial,Helvetica,sans-serif; max-width:640px; margin:0 auto; border:1px solid #e5e7eb;">
    <div style="background:#111827; color:#fff; padding:16px 20px;">
      <h2 style="margin:0;">New Newsletter Subscription</h2>
    </div>
    <div style="padding:20px;">
      <p><strong>Email:</strong> ${safe(data.email)}</p>
      <p style="margin-top:16px; color:#6b7280;">A new subscriber has joined the Dwansys newsletter list.</p>
    </div>
    <div style="padding:12px 20px; font-size:12px; color:#6b7280; border-top:1px solid #e5e7eb;">
      Sent via Dwansys Newsletter Subscription
    </div>
  </div>`;
}

async function sendEmail({ from, subject, html, template, data, req }) {
  try {
    const transporter = await initializeTransporter(req);
    const to = process.env.EMAIL_TO;
    if (!to) throw Object.assign(new Error('EMAIL_TO not configured'), { status: 500 });

    let finalHtml = html;
    let finalSubject = subject;
    if (template === 'contact-form') {
      finalHtml = generateContactFormEmail(data || {});
      finalSubject = subject || `[Contact] ${data?.subject || 'New submission'}`;
    } else if (template === 'subscription') {
      finalHtml = generateSubscriptionEmail(data || {});
      finalSubject = subject || `[Newsletter] New subscriber: ${data?.email || 'Unknown'}`;
    }

    const mailOptions = {
      from: from || process.env.EMAIL_USER,
      to,
      subject: finalSubject,
      html: finalHtml,
    };

    // Add timeout to email sending
    const sendPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 15000);
    });
    
    const info = await Promise.race([sendPromise, timeoutPromise]);
    
    if (req && req.log) req.log.info({ messageId: info.messageId }, 'Email sent');
    return { success: true, messageId: info.messageId };
  } catch (err) {
    if (req && req.log) req.log.error({ err: { message: err.message } }, 'Failed to send email');
    throw err;
  }
}

module.exports = { initializeTransporter, generateContactFormEmail, generateSubscriptionEmail, sendEmail };