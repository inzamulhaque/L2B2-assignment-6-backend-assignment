import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createMaintenanceRequestIntoDB,
  getMyMaintenanceRequestFromDB,
} from "./maintenance.service";

const createMaintenanceRequest = catchAsync(async (req, res) => {
  const { email } = req.user;

  const result = await createMaintenanceRequestIntoDB(req.body, email);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Maintenance request is created successfully",
    data: result,
  });
});

const getMyMaintenanceRequest = catchAsync(async (req, res) => {
  const { email } = req.user;

  const result = await getMyMaintenanceRequestFromDB(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Maintenance request is retrieved successfully",
    data: result,
  });
});

export { createMaintenanceRequest, getMyMaintenanceRequest };
