"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userMiddleware = (req, res, next) => {
    const { token } = req.headers;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        }
        else {
            res.status(403).json({
                message: "You are not longged in"
            });
            return;
        }
    }
    catch (e) {
        res.status(500).json({
            message: "server crush!!"
        });
    }
};
exports.userMiddleware = userMiddleware;
//# sourceMappingURL=middleware.js.map