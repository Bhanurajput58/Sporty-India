import mongoose from "mongoose";

const sportsModel = new mongoose.Schema({
    name:String,
    rating:Number,
    playerCount:Number
})

export const Sports = mongoose.models.sports || mongoose.model("sports",sportsModel);