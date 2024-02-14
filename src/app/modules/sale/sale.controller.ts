import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createOrderIntoDB,
  getAllSalesDetailsFromDB,
  getSaleHistoryFromDB,
  getSalesDetailsByIdFromDB,
} from "./sale.service";

const getAllSalesDetails = catchAsync(async (req, res) => {
  const result = await getAllSalesDetailsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is retrieved successfully",
    data: result,
  });
});

const getSalesDetailsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSalesDetailsByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is retrieved successfully",
    data: result,
  });
});

const createOrder = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await createOrderIntoDB(req.body, email);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order is created successfully",
    data: result,
  });
});

const getSaleHistory = catchAsync(async (req, res) => {
  const { time } = req.query;
  const result = await getSaleHistoryFromDB(time as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Sale History successfully",
    data: result,
  });
});

export { getAllSalesDetails, getSalesDetailsById, createOrder, getSaleHistory };
