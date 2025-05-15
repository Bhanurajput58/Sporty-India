import mongoose from "mongoose";

const accessLogSchema = new mongoose.Schema({
  ip: String,
  referrer: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const AccessLog = mongoose.models.AccessLog || mongoose.model("AccessLog", accessLogSchema);
