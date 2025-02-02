import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

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
    imageUrl: {
        type: String,
        trim: true,
    }
},{
    timestamps: true,
    toJSON: { virtuals: true },
});

// add plugin that converts mongoose to json
educationSchema.plugin(toJSON);

export default mongoose.models.Education || mongoose.model("Education", educationSchema);