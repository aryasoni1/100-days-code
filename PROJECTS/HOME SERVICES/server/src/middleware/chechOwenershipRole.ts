import { Request, Response, NextFunction } from "express";
import ServiceProvider from "../models/ServiceProvider";

export const checkOwensershipRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as any).user;
    const provider = await ServiceProvider.findById(req.params.id);
    if (!provider) {
      res.status(404).json({ message: "provider not found" });
      return;
    }
    if (user.role == "admin" || user.userId == provider.user.toString()) {
      next();
    } else {
      res.status(403).json({ message: "unauthorized" });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Error getting provider", error: err });
  }
};
