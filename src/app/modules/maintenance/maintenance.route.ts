import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import {
  acceptMaintenanceRequest,
  createMaintenanceRequest,
  getAllMaintenanceRequest,
  getMyMaintenanceRequest,
} from "./maintenance.controller";
import validateRequest from "../../middlewares/validateRequest";
import { maintenanceValidationSchema } from "./maintenance.validation";

const router: Router = Router();

router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.seller),
  getAllMaintenanceRequest
);

router.post(
  "/",
  auth(USER_ROLE.buyer),
  validateRequest(maintenanceValidationSchema),
  createMaintenanceRequest
);

router.get(
  "/my-maintenance-request",
  auth(USER_ROLE.buyer),
  getMyMaintenanceRequest
);

router.patch(
  "/accept-request/:id",
  auth(USER_ROLE.seller),
  acceptMaintenanceRequest
);

const maintenanceRouter = router;
export default maintenanceRouter;
