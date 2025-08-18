import mongoose from "mongoose";
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
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password?: string | null;
    email?: string | null;
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    password?: string | null;
    email?: string | null;
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    email?: string | null;
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password?: string | null;
    email?: string | null;
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    password?: string | null;
    email?: string | null;
    role?: {
        enum: unknown[] | unknown[] | unknown[];
    } | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map