import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  customer: mongoose.Types.ObjectId;
  provider: mongoose.Types.ObjectId;
  time: Date;
  status: "Pending" | "Confirmed" | "Cancelled";
  service: string;
  notes?: string;
}

const bookingSchema = new Schema<IBooking>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    provider: {
      type: Schema.Types.ObjectId,
      ref: "ServiceProvider",
      required: true,
    },
    time: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
    service: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", bookingSchema);
