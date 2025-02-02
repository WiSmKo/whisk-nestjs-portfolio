import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const experienceSchema = new mongoose.Schema({
    organisation: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    }
  },{
    timestamps: true,
    toJSON: { virtuals: true },
  });

  experienceSchema.plugin(toJSON);

  export default mongoose.models.Experience || mongoose.model("Experience", experienceSchema);