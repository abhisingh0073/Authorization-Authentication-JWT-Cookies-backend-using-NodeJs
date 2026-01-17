import mongoose from "mongoose";
const { Schema, model} = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        default: "default.png",
    },

    bio: {
        type: String,
        maxLength: 200,
    },

    followers: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],

    following: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    ],

    interests: [String],

    memberships: [
        {
            creator: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
            expiresAt: Date,
        },
    ],

    totalPosts: {
        type: Number,
        default: 0,
    },

    totalViews: {
        type: Number,
        default: 0,
    },
    
}, { timestamps: true } )

export default model("User", userSchema);