import mongoose, { Schema } from "mongoose";

import dotenv from "dotenv";
import { email } from "zod";
import { resolveModuleName } from "typescript";
import e from "express";
dotenv.config();

async function connect(){
    if(process.env.MongodbURL){
        await mongoose.connect(process.env.MongodbURL)
    }
}

connect();

const UserSchema = new mongoose.Schema ({
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        enum: ["Admin", "User", "Intern"],
        type: String,
        require: true,
    }
});

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,  
    },
    email  : {
        type: String,
        require: true, 
        unique: true
    },
    role: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
        enum: ["Active", "Inactive"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
});

export const employeeModel = mongoose.model('Employee', employeeSchema);
export const userModel = mongoose.model('User', UserSchema);


