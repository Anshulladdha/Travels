import { Schema, model } from "mongoose";

const enquirySchema = new Schema({
  name: String,
  email: String,
  website: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Enquiry", enquirySchema);
