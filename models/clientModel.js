const { Schema, model } = require("mongoose");

const Clients = new Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    interactionType: {
      type: String,
      required: true,
      enum: ["Call", "Email", "Meeting"],
    },
    interactionDate: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = model("Clients", Clients);
