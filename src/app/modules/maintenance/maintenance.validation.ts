import { z } from "zod";

export const maintenanceValidationSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    buyerEmail: z.string(),
    sellerEmail: z.string().optional(),
    date: z.string().optional(),
    nextScheduled: z.string(),
    serviceDetails: z.string(),
    notes: z.string().optional(),
  }),
});
