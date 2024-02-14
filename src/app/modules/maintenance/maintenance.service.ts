import { IMaintenance } from "./maintenance.interface";
import Maintenance from "./maintenance.model";

const createMaintenanceRequestIntoDB = async (
  data: IMaintenance,
  buyerEmail: string
) => {
  const result = await Maintenance.create({ ...data, buyerEmail });
  return result;
};

export { createMaintenanceRequestIntoDB };
