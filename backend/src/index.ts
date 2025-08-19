import express, { Request, Response } from "express"
import { employeeModel, taskModel, userModel } from "./db";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import zod from "zod";
import cors from "cors"
import dotenv from "dotenv";
import { userMiddleware } from "./middleware";
import mongoose from "mongoose";
dotenv.config();

const app = express();

const signupSchema = zod.object({
    password: zod.string().min(6),
    email: zod.string().email(),
    role: zod.enum(["Admin", "User", "Intern"])
})

app.use(cors());
app.use(express.json());

app.post("/signup", async (req: Request, res : Response) => {
    const { role, password, email } = req.body;

    const {success} = signupSchema.safeParse(req.body);
    
    if(success){

        const hashPassowrd = await bcrypt.hash(password, 7);

        try {
            const response = await userModel.create({
                password: hashPassowrd,
                email,
                role
            })
            return res.json({
                message: "signup sccuessfully!!"
            })
            
        } catch (e) {
            return res.json({
                message : "something is wrong! email is already present try with new email id"
            });
        }
    } else {
        res.json({
            message : "invalid credential!!",
            error : signupSchema.safeParse(req.body).error
        })
    }
})

app.post("/signin", async (req: Request, res : Response) => {
    const { password, email } = req.body;
    
    try{
        const user = await userModel.findOne({
            email
        }) 
        if(user){
            const realPassword = await bcrypt.compare(password, user?.password!);

            if(realPassword){
                const token = jwt.sign({id: user._id }, process.env.JWT_SECRET!);
                return res.json({
                    token
                });
                
            } 
            else {
                return res.json({
                    message: "Incorrect Password"
                })
            }
        }
        else {
            res.json({
                message: "Incorrect Email"
            })
        }
    } catch(e) {
        res.json({
            message: "Something went wrong",
            error: e
        })
    }
    
    
})

app.post("/employee",userMiddleware, async (req: Request, res: Response) => {
    const { name, email, role, department, status } = req.body;
    // @ts-ignore
    const { userId } = req; 

    try {
        const response = await employeeModel.create({
            name,
            email,
            role,
            department,
            status,
            userId
        })
        return res.json({
            content: response,
            message: "Employee data Create successfully"
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})


app.get("/employee", userMiddleware, async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId;

    try {
        const response = await employeeModel.find({
            userId
        });
        return res.json({
            content: response
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})

app.delete("/employee/:contentId", userMiddleware, async (req: Request, res: Response) => {
    // @ts-ignore
    const {contentId} = req.params;
    try {
        const response = await employeeModel.deleteOne({
            _id: contentId
        });
        return res.json({
            message: "Employee data deleted successfully"
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})

app.put("/employee/:contentId", userMiddleware, async (req: Request, res: Response) => {
    const {name, email, role, department, status} = req.body;
    const {contentId} = req.params;

    try {
        const response = await employeeModel.findOneAndUpdate({
            _id: contentId
        },{
            name,
            email,
            role,
            department,
            status  
        });
        return res.json({
            message: "Employee data updated successfully",
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})

app.post("/task", userMiddleware, async (req: Request, res: Response) => {
    const {  task, employee, priority, department, status, date } = req.body;
    // @ts-ignore
    const { userId } = req; 

    const employeeName = await employeeModel.findOne({
        _id: employee
    })

    try {
        const response = await taskModel.create({
            name: employeeName?.name,
            status,
            task,
            department,
            priority,
            employeeId: employee,
            dueDate: date,
            userId
        })
        return res.json({
            content: response,
            message: "Employee data Create successfully"
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})


app.get("/task", userMiddleware, async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId;

    try {
        const response = await taskModel.find({
            userId
        });
        return res.json({
            content: response
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})


app.delete("/task/:taskId", userMiddleware, async (req: Request, res: Response) => {
    // @ts-ignore
    const {taskId} = req.params;
    try {
        const response = await taskModel.deleteOne({
            _id: taskId
        });
        return res.json({
            message: "Employee data deleted successfully"
        })
    } catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        })
    }
})

app.listen(3000)