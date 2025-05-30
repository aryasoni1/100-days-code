import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../index";
import jwt from "jsonwebtoken";
import User from "../models/User";

//console.log("JWT_SECRET controller:", process.env.JWT_SECRET);
export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    console.log("JWT_SECRECT from controller", JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: "registration failed", error: err });
  }
};
//THIS RETURN A VOID
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }
    console.log("JWT_SECRECT from controller", JWT_SECRET);
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "login failed", error: err });
  }
};
