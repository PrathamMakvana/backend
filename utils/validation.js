const Joi = require("joi");

const interactionSchema = Joi.object({
  clientName: Joi.string().min(3).max(100).required(),
  interactionType: Joi.string().valid("Call", "Email", "Meeting").required(),
  interactionDate: Joi.date().max("now").required(),
  notes: Joi.string().max(500).allow(""),
});

module.exports = { interactionSchema };
