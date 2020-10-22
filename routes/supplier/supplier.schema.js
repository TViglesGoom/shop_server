const Joi = require('joi');

const SupplierSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(255)
        .required(),
});

module.exports = SupplierSchema;