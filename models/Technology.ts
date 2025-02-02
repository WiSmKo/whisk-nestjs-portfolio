import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

export interface ITechnology extends Document{
    name: string;
    description: string;
    image: {
        url: string;
        alt: string;
    }
}

const technologySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
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
    }, {
    timestamps: true,
    toJSON: { virtuals: true },
});

// add plugin that converts mongoose to json    
technologySchema.plugin(toJSON);

export default mongoose.models.Technology || mongoose.model("Technology", technologySchema);
