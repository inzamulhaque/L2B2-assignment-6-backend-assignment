import { Types } from "mongoose";

export interface ISale {
  sellerEmail: string;
  bikeId: Types.ObjectId;
  buyerName: string;
  date: string;
  quantity: number;
  totalAmount?: number;
}
