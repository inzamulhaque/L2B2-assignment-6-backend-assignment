import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { createMaintenanceRequest } from "./maintenance.controller";

const router: Router = Router();

router.post("/", auth(USER_ROLE.buyer), createMaintenanceRequest);

const maintenanceRouter = router;
export default maintenanceRouter;
