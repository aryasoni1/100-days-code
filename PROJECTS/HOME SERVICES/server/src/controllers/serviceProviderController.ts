import { Request, Response } from "express";
import ServiceProvider from "../models/ServiceProvider";

// Create new service provider (admin or provider)
export const createProvider = async (req: Request, res: Response) => {
  try {
    const provider = await ServiceProvider.create({
      ...req.body,
      user: (req as any).user.userId,
    });
    res.status(201).json(provider);
  } catch (err) {
    res
      .status(500)
      .json({ message: "service provider creation failed", error: err });
  }
};
// Get all service providers
export const getAllProviders = async (req: Request, res: Response) => {
  try {
    const providers = await ServiceProvider.find();
    res.status(200).json(providers);
  } catch (err) {
    res.status(500).json({ message: "fetching providers failed", error: err });
  }
};

//Get provider by id
export const getProviderById = async (req: Request, res: Response) => {
  try {
    const provider = await ServiceProvider.findById(req.params.id);
    if (!provider) {
      res.status(404).json({ message: "provider not found" });
      return;
    }
    res.status(200).json(provider);
  } catch (err) {
    res.status(500).json({ message: "Error getting provider", error: err });
  }
};

//Update Provider
export const updateProvider = async (req: Request, res: Response) => {
  try {
    const updated = await ServiceProvider.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      res.status(400).json({ message: "provider not found" });
      return;
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating provider", error: err });
  }
};

//Delete Provider
export const deleteProvider = async (req: Request, res: Response) => {
  try {
    const deleted = await ServiceProvider.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(400).json({ message: "provider not found" });
      return;
    }
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Error deleting provider", error: err });
  }
};
