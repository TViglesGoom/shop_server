const Joi = require('joi');

const CategorySchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(255)
        .required(),
});

module.exports = CategorySchema;