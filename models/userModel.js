import mongoose from "mongoose";
import {hashPassword} from "../controllers/helpers/BcryptHelper.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {type:String,required:true},
    userName: {type:String, required: true, unique:true},
    password: {type:String, required:true}
}, {timestamps: true})


userSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password)
    next()
})


export const User = mongoose.model('user',userSchema)