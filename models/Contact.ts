import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// Store contact info of anyone requesting an email
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    private: true,
    required: true,
    },
},{
  timestamps: true,
  toJSON: { virtuals: true },
});

// add plugin that converts mongoose to json
contactSchema.plugin(toJSON);

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
