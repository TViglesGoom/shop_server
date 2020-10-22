const Joi = require('joi');

const ProductSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(255)
        .required(),
    price: Joi.number()
        .min(0)
        .required(),
    expireAt: Joi.date()
        .required(),
    measuring: Joi.string()
        .min(1)
        .max(30)
        .required(),
    quantity: Joi.number()
        .min(0)
        .required(),
    supplierId: Joi.number()
        .integer()
        .min(1)
        .required(),
    categoryId: Joi.number()
        .integer()
        .min(1)
        .required(),
})

module.exports = ProductSchema;