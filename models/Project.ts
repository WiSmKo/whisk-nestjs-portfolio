import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    repositoryUrl: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

// add plugin that converts mongoose to json    
projectSchema.plugin(toJSON);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);