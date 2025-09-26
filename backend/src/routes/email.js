const express = require('express');
const { emailSendSchema } = require('../utils/validator');
const { sendEmail } = require('../services/emailService');

const router = express.Router();

router.post('/send-email', async (req, res, next) => {
  try {
    const { error, value } = emailSendSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const err = new Error('Invalid email payload');
      err.status = 400;
      err.code = 'INVALID_BODY';
      err.details = error.details.map((d) => d.message);
      throw err;
    }
    const result = await sendEmail({ ...value, req });
    res.json(result);
  } catch (err) { next(err); }
});

module.exports = router;


