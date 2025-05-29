import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";

dotenv.config({ path: ".env.server" });

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection

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
app.get("/", (req, res) => {
  res.send("ServiceConnect API is running");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
