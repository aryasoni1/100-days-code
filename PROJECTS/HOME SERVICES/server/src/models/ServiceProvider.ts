import mongoose, { Document, Schema } from "mongoose";

export interface IServiceProvider extends Document {
  user: mongoose.Types.ObjectId;
  category: string;
  description: string;
  rating: number;
  location: string;
  contact: string;
  availability: boolean;
}

const ServiceProviderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    description: { type: String },
    rating: { type: Number, default: 0 },
    location: { type: String },
    contact: { type: String },
    availability: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model<IServiceProvider>(
  "ServiceProvider",
  ServiceProviderSchema
);
