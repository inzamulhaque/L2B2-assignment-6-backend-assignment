import { Types } from "mongoose";

export interface IMaintenance {
  bikeId: Types.ObjectId;
  buyerEmail: string;
  sellerEmail?: string;
  date: string;
  nextScheduled: string;
  serviceDetails: string;
  notes?: string;
  status?: "pending" | "accepted";
}
