import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(400).json({ message: "Authorization header missing" });
    return;
  }

  const token = authHeader.split(" ")[1];
  console.log("Token extracted:", token);

  const JWT_SECRET = process.env.JWT_SECRET || "secret";
  console.log("JWT_SECRET:", JWT_SECRET);

  if (!token) {
    res.status(400).json({ message: "token not found" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    console.log("JWT verify error:", err);
    res.status(403).json({ message: "unauthorized" });
    return;
  }
};
