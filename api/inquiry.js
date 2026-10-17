const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Please submit the inquiry form.' });
  }
  if (!String(req.headers['content-type'] || '').includes('application/json')) {
    return res.status(415).json({ error: 'Please submit the inquiry form.' });
  }
  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid inquiry.' });
  }
  if (body.website) return res.status(200).json({ ok: true });

  const limits = { name: 120, company: 160, phone: 40, email: 254, machine: 160, message: 5000 };
  const fields = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = body[key] === undefined ? '' : body[key];
    if (typeof value !== 'string' || value.length > limit) {
      return res.status(400).json({ error: 'Please check your inquiry details.' });
    }
    fields[key] = value.trim();
  }
  if (!fields.name || !fields.phone || !fields.message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.name)) {
    return res.status(400).json({ error: 'Please provide your name, phone, valid email, and requirement.' });
  }
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return res.status(503).json({ error: 'Email is temporarily unavailable. Please email purjawala@gmail.com or contact us by phone.' });
  }
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  try {
    await transport.sendMail({
      from: { name: 'Purjawala Website', address: process.env.GMAIL_USER },
      to: 'purjawala@gmail.com',
      replyTo: fields.email,
      subject: 'New spare parts inquiry - Purjawala website',
      text: Object.entries(fields).map(([key, value]) => `${key}: ${value || '-'}`).join('\n\n'),
    });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Your inquiry could not be sent. Please try again or email purjawala@gmail.com.' });
  }
};
