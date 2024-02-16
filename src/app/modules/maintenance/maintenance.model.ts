import { Schema, model } from "mongoose";
import { IMaintenance } from "./maintenance.interface";

const maintenanceSchema = new Schema<IMaintenance>(
  {
    bikeId: {
      type: Schema.Types.ObjectId,
      required: [true, "please provide bike id"],
      ref: "Bike",
    },

    buyerEmail: {
      type: String,
      required: [true, "please provide buyer email"],
      ref: "User",
    },

    sellerEmail: {
      type: String,
      ref: "User",
    },

    date: {
      type: String,
      required: [true, "please provide last maintenance date"],
    },

    nextScheduled: {
      type: String,
      required: [true, "please provide next scheduled"],
    },

    serviceDetails: {
      type: String,
      required: [true, "please provide service details"],
    },

    notes: {
      type: String,
    },

    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Maintenance = model<IMaintenance>("Maintenance", maintenanceSchema);

export default Maintenance;
