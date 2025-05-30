import dotenv from "dotenv";
dotenv.config({ path: ".env.server" });
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in .env");
}

export const JWT_SECRET = process.env.JWT_SECRET;
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import serviceProviderRoutes from "./routes/serviceProviderRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
//console.log("JWT_SECRET at startup:", process.env.JWT_SECRET);

const MONGO_URI = process.env.MONGO_URI || "";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
    process.exit(1);
  });
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/providers", serviceProviderRoutes);
app.get("/", (req, res) => {
  res.send("ServiceConnect API is running");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
