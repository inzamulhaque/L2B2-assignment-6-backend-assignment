import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import saleValidationSchema from "./sale.validation";
import { createOrder, getSaleHistory } from "./sale.controller";
import { USER_ROLE } from "../user/user.constant";

const router: Router = Router();

router.post(
  "/order",
  auth(USER_ROLE.seller, USER_ROLE.admin, USER_ROLE.buyer),
  validateRequest(saleValidationSchema),
  createOrder
);

router.get(
  "/sales-history",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  getSaleHistory
);

const saleRouter = router;
export default saleRouter;
