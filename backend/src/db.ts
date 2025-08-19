import mongoose, { Schema } from "mongoose";

import dotenv from "dotenv";
import { email, string } from "zod";
import { resolveModuleName } from "typescript";
import e from "express";
import { required } from "zod/mini";
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

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,  
    },
    priority: {
        enum: ["High", "Medium", "Low"],
        type: String,
        require: true,
    },
    status: {
        enum: ["Pending", "In Progress", "Completed"],
        type: String,   
        require: true,
    },
    department: {
        type: String, 
        require: true 
    },
    employeeId: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        require: true   
    },
    userId: {
        type: Schema.Types.ObjectId,    
        ref: "User",
        require: true
    },
    dueDate: {
        type: Date,
        require: true
    }
});

export const taskModel = mongoose.model('Task', taskSchema);
export const employeeModel = mongoose.model('Employee', employeeSchema);
export const userModel = mongoose.model('User', UserSchema);


