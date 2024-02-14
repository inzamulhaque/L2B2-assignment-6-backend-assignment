import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import {
  createMaintenanceRequest,
  getAllMaintenanceRequest,
  getMyMaintenanceRequest,
} from "./maintenance.controller";

const router: Router = Router();

router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.seller),
  getAllMaintenanceRequest
);

router.post("/", auth(USER_ROLE.buyer), createMaintenanceRequest);

router.get(
  "/my-maintenance-request",
  auth(USER_ROLE.buyer),
  getMyMaintenanceRequest
);

const maintenanceRouter = router;
export default maintenanceRouter;
