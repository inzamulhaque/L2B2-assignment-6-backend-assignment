import { IMaintenance } from "./maintenance.interface";
import Maintenance from "./maintenance.model";

const getAllMaintenanceRequestFromDB = async () => {
  const result = await Maintenance.find().populate("bikeId");
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
  const result = await Maintenance.find({ buyerEmail }).populate("bikeId");
  return result;
};

const acceptMaintenanceRequestIntoDB = async (
  id: string,
  sellerEmail: string
) => {
  const result = await Maintenance.findByIdAndUpdate(
    id,
    {
      sellerEmail,
      status: "accepted",
    },
    { new: true }
  );
  return result;
};

export {
  getAllMaintenanceRequestFromDB,
  createMaintenanceRequestIntoDB,
  getMyMaintenanceRequestFromDB,
  acceptMaintenanceRequestIntoDB,
};
