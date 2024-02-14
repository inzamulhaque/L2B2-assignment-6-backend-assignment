import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import saleValidationSchema from "./sale.validation";
import {
  createOrder,
  getAllSalesDetails,
  getSaleHistory,
  getSalesDetailsById,
} from "./sale.controller";
import { USER_ROLE } from "../user/user.constant";

const router: Router = Router();

router.get("/", auth(USER_ROLE.seller, USER_ROLE.admin), getAllSalesDetails);

router.get(
  "/sales-history",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  getSaleHistory
);

router.get(
  "/:id",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  getSalesDetailsById
);

router.post(
  "/order",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  validateRequest(saleValidationSchema),
  createOrder
);

const saleRouter = router;
export default saleRouter;
