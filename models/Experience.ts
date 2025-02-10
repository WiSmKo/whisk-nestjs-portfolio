import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

export interface IExperience extends Document {
  organisation: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  image?: {
    url: string;
    alt: string;
}
}

const experienceSchema = new mongoose.Schema({
    organisation: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    roleType: {
      type: String,
      enum: ["full-stack", "back-end", "front-end", "mobile", "other"],
      trim: true,
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
    employmentType: {
      type: String,
      enum: ["volunteer", "full-time", "part-time", "contract", "internship"],
      trim: true,
    },
    image: {
      type: Object,
      private: true,
      url: {
          type: String,
      },
      alt: {
          type: String,
      }
    }
  },{
    timestamps: true,
    toJSON: { virtuals: true },
  });

  experienceSchema.plugin(toJSON);

  export default mongoose.models.Experience || mongoose.model("Experience", experienceSchema);