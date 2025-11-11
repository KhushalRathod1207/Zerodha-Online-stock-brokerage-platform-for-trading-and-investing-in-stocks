// middleware/validate.js
module.exports = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.details.map((err) => err.message)
            });
        }

        // replace req.body with validated value (e.g., applies defaults)
        req.body = value;
        next();
    };
};
