const Joi = require('joi');

const emailSendSchema = Joi.object({
  from: Joi.string().email().optional(),
  subject: Joi.string().max(200).when('template', { is: Joi.exist(), then: Joi.optional(), otherwise: Joi.required() }),
  html: Joi.string().max(20000).optional(),
  template: Joi.string().valid('contact-form', 'subscription').optional(),
  data: Joi.object({
    name: Joi.string().max(120).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(40).allow('', null),
    company: Joi.string().max(160).allow('', null),
    subject: Joi.string().max(200).required(),
    message: Joi.string().max(5000).required(),
  }).optional(),
});

const contactCreateSchema = Joi.object({
  name: Joi.string().max(120).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().max(40).allow('', null),
  company: Joi.string().max(160).allow('', null),
  subject: Joi.string().max(200).required(),
  message: Joi.string().max(5000).required(),
});

const contactUpdateSchema = Joi.object({
  name: Joi.string().max(120),
  email: Joi.string().email(),
  phone: Joi.string().max(40).allow('', null),
  company: Joi.string().max(160).allow('', null),
  subject: Joi.string().max(200),
  message: Joi.string().max(5000),
}).min(1);

const subscriberCreateSchema = Joi.object({
  email: Joi.string().email().required(),
});

const subscriberUpdateSchema = Joi.object({
  email: Joi.string().email(),
}).min(1);

module.exports = { emailSendSchema, contactCreateSchema, contactUpdateSchema, subscriberCreateSchema, subscriberUpdateSchema };


