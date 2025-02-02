import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

export interface IEducation extends Document {
    school: string;
    degree: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    image?: {
        url: string;
        alt: string;
    }
}

const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        trim: true,
        required: true,
    },
    degree: {
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

// add plugin that converts mongoose to json
educationSchema.plugin(toJSON);

export default mongoose.models.Education || mongoose.model("Education", educationSchema);