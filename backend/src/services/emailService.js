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
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
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
      await transporter.verify();
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

  const maxAttempts = 3;
  let lastErr;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const info = await transporter.sendMail(mailOptions);
      if (req && req.log) req.log.info({ attempt, messageId: info.messageId }, 'Email sent');
      return { success: true, messageId: info.messageId };
    } catch (err) {
      lastErr = err;
      if (req && req.log) req.log.warn({ attempt, err: { message: err.message } }, 'Email send failed');
      if (attempt < maxAttempts) await delay(500 * attempt);
    }
  }
  const e = new Error('Failed to send email');
  e.status = 502;
  e.cause = lastErr;
  throw e;
}

module.exports = { initializeTransporter, generateContactFormEmail, generateSubscriptionEmail, sendEmail };


