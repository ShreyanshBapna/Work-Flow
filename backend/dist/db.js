"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.employeeModel = exports.taskModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function connect() {
    if (process.env.MongodbURL) {
        await mongoose_1.default.connect(process.env.MongodbURL);
    }
}
connect();
const UserSchema = new mongoose_1.default.Schema({
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
const employeeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
});
const taskSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Employee",
        require: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    dueDate: {
        type: Date,
        require: true
    }
});
exports.taskModel = mongoose_1.default.model('Task', taskSchema);
exports.employeeModel = mongoose_1.default.model('Employee', employeeSchema);
exports.userModel = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=db.js.map