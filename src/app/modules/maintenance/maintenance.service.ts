import { IMaintenance } from "./maintenance.interface";
import Maintenance from "./maintenance.model";

const getAllMaintenanceRequestFromDB = async () => {
  const result = await Maintenance.find();
  return result;
};

const createMaintenanceRequestIntoDB = async (
  data: IMaintenance,
  buyerEmail: string
) => {
  const result = await Maintenance.create({ ...data, buyerEmail });
  return result;
};

const getMyMaintenanceRequestFromDB = async (buyerEmail: string) => {
  const result = await Maintenance.find({ buyerEmail });
  return result;
};

export {
  getAllMaintenanceRequestFromDB,
  createMaintenanceRequestIntoDB,
  getMyMaintenanceRequestFromDB,
};
