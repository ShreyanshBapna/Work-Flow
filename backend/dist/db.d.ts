import mongoose from "mongoose";
export declare const taskModel: mongoose.Model<{
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null;
    department?: string | null;
    status?: "Pending" | "In Progress" | "Completed" | null;
    userId?: mongoose.Types.ObjectId | null;
    task?: string | null;
    priority?: "High" | "Medium" | "Low" | null;
    employeeId?: mongoose.Types.ObjectId | null;
    dueDate?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const employeeModel: mongoose.Model<{
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null;
    email?: string | null;
    role?: string | null;
    department?: string | null;
    status?: "Active" | "Inactive" | null;
    userId?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const userModel: mongoose.Model<{
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    password?: string | null;
    email?: string | null;
    role?: "Admin" | "User" | "Intern" | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map