import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    try{
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET!);
            
        if(decoded){
            // @ts-ignore
            req.userId = decoded.id;
            next();
        } else {
            res.status(403).json({
                message: "You are not longged in"
            })
            return;
        }
    } catch (e) {
        res.status(500).json({
                message: "server crush!!"
        })
    }
}