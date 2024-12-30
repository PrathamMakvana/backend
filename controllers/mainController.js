const Clients = require("../models/clientModel");
const { interactionSchema } = require("../utils/validation");

const addClients = async (req, res, next) => {
  try {
    const { error, value } = interactionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
      });
    }

    const newInteraction = new Clients(value);
    const savedInteraction = await newInteraction.save();

    return res.status(201).json({
      status: "success",
      message: "Client interaction added successfully",
      data: savedInteraction,
    });
  } catch (err) {
    console.error("Error adding client interaction:", err.message);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const getClients = async (req, res, next) => {
  try {
    const interactions = await Clients.find({ isActive: true }).sort({
      interactionDate: -1,
    });

    return res.status(200).json({
      status: "success",
      message: "Client interactions fetched successfully",
      data: interactions,
    });
  } catch (err) {
    console.error("Error fetching client interactions:", err.message);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

module.exports = { addClients, getClients };
