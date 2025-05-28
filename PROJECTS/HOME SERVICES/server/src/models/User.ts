import mongoose, { Document, Schema } from "mongoose";
import { SCHEMA_VECTOR_FIELD_ALGORITHM } from "redis";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "provider";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "provider"], required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;
//example
//const user = await UserModel.findOne({ email });
//console.log(user?.name); // ✅ name is strongly typed because of IUser
