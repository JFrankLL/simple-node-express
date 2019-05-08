const Joi = require('joi');
const validator = require('express-joi-validation')({});

const headerSchema = Joi.object({
  authorization: Joi.string()
    .min(7)
    .max(200)
    .required()
    .regex(/^Bearer [A-Za-z0-9-_]*\.[A-Za-z0-9-_]*(\.[A-Za-z0-9-_.+/=]*){0,1}$/)
    .empty([null, '']),
});

const middleware = validator.headers(headerSchema);

module.exports = middleware;
