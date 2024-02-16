import { z } from "zod";

export const maintenanceValidationSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    date: z.string(),
    nextScheduled: z.string(),
    serviceDetails: z.string(),
    notes: z.string().optional(),
  }),
});
