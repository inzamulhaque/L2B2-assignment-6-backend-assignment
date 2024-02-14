import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createMaintenanceRequestIntoDB } from "./maintenance.service";

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

export { createMaintenanceRequest };
