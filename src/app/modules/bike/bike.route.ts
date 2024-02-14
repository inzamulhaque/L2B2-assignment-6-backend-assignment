import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import bikeValidationSchema, {
  updateBikeValidationSchema,
} from "./bike.validation";
import {
  createBike,
  getAllBikes,
  removeBike,
  removeBulk,
  updateBike,
} from "./bike.controller";
import { USER_ROLE } from "../user/user.constant";

const router: Router = Router();

router.get(
  "/",
  auth(USER_ROLE.seller, USER_ROLE.admin, USER_ROLE.buyer),
  getAllBikes
);

router.post(
  "/",
  auth(USER_ROLE.seller),
  validateRequest(bikeValidationSchema),
  createBike
);

router.delete(
  "/remove-bike/:id",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  removeBike
);

router.patch(
  "/update-bike/:id",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  validateRequest(updateBikeValidationSchema),
  auth(USER_ROLE.seller, USER_ROLE.admin),
  updateBike
);

router.delete(
  "/bulk-remove",
  auth(USER_ROLE.seller, USER_ROLE.admin),
  removeBulk
);

const bikeRouter = router;
export default bikeRouter;
