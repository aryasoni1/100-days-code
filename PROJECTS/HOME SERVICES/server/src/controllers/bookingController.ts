import { Request, Response } from "express";
import Booking from "../models/BookingModel";

// Create a new booking (Customer only)
export const createBooking = async (req: Request, res: Response) => {
  const { provider, time, service, notes } = req.body;
  const customer = (req as any).user.userId;
  try {
    const newBooking = await Booking.create({
      customer,
      provider,
      time,
      service,
      notes,
    });
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: "booking failed", error: err });
  }
};

//Get customer booking
