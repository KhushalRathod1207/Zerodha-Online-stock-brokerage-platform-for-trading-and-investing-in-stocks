const Joi = require("joi");

// ------------------ Holding Validation ------------------
const holdingValidationSchema = Joi.object({
    name: Joi.string().required(),
    qty: Joi.number().required(),
    avg: Joi.number().required(),
    price: Joi.number().required(),
    net: Joi.string().required(),
    day: Joi.string().required(),
    isLoss: Joi.boolean().default(false)
});

// ------------------ Orders Validation ------------------
const ordersValidationSchema = Joi.object({
    name: Joi.string().required(),
    qty: Joi.number().required(),
    price: Joi.number().required(),
    mod: Joi.string().valid("BUY", "SELL").required() // only BUY or SELL
});

// ------------------ Position Validation ------------------
const positionValidationSchema = Joi.object({
    product: Joi.string().required(),
    name: Joi.string().required(),
    qty: Joi.number().required(),
    avg: Joi.number().required(),
    price: Joi.number().required(),
    net: Joi.string().required(),
    day: Joi.string().required(),
    isLoss: Joi.boolean().default(false)
});

module.exports = {
    holdingValidationSchema,
    ordersValidationSchema,
    positionValidationSchema
};
