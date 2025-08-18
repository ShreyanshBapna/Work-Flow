"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = __importDefault(require("zod"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const signupSchema = zod_1.default.object({
    password: zod_1.default.string().min(6),
    email: zod_1.default.string().email(),
    role: zod_1.default.enum(["Admin", "User", "Intern"])
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/signup", async (req, res) => {
    const { role, password, email } = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if (success) {
        const hashPassowrd = await bcrypt_1.default.hash(password, 7);
        try {
            const response = await db_1.userModel.create({
                password: hashPassowrd,
                email,
                role
            });
            return res.json({
                message: "signup sccuessfully!!"
            });
        }
        catch (e) {
            return res.json({
                message: "something is wrong! email is already present try with new email id"
            });
        }
    }
    else {
        res.json({
            message: "invalid credential!!",
            error: signupSchema.safeParse(req.body).error
        });
    }
});
app.post("/signin", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await db_1.userModel.findOne({
            email
        });
        if (user) {
            const realPassword = await bcrypt_1.default.compare(password, user?.password);
            if (realPassword) {
                const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET);
                return res.json({
                    token
                });
            }
            else {
                return res.json({
                    message: "Incorrect Password"
                });
            }
        }
        else {
            res.json({
                message: "Incorrect Email"
            });
        }
    }
    catch (e) {
        res.json({
            message: "Something went wrong",
            error: e
        });
    }
});
app.post("/employee", middleware_1.userMiddleware, async (req, res) => {
    const { name, email, role, department, status } = req.body;
    // @ts-ignore
    const { userId } = req.userId;
    try {
        const response = await db_1.employeeModel.create({
            name,
            email,
            role,
            department,
            status,
            userId
        });
        return res.json({
            content: response,
            message: "Employee data Create successfully"
        });
    }
    catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        });
    }
});
app.get("/employee", middleware_1.userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    try {
        const response = await db_1.employeeModel.find({
            userId
        });
        return res.json({
            content: response
        });
    }
    catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        });
    }
});
app.delete("/employee/:contentId", middleware_1.userMiddleware, async (req, res) => {
    // @ts-ignore
    const { contentId } = req.params;
    console.log(contentId);
    try {
        const response = await db_1.employeeModel.deleteOne({
            _id: contentId
        });
        return res.json({
            message: "Employee data deleted successfully"
        });
    }
    catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        });
    }
});
app.put("/employee/:contentId", middleware_1.userMiddleware, async (req, res) => {
    const { name, email, role, department, status } = req.body;
    const { contentId } = req.params;
    try {
        const response = await db_1.employeeModel.findOneAndUpdate({
            _id: contentId
        }, {
            name,
            email,
            role,
            department,
            status
        });
        return res.json({
            message: "Employee data updated successfully",
        });
    }
    catch (e) {
        return res.json({
            message: "Something went wrong",
            error: e
        });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map