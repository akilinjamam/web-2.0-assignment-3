import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.route("/").get(userController.getAllUserController);
router.route("/create-user").post(userController.createUserController);

router
  .route("/:id")
  .get(userController.getSingleUserController)
  .patch(userController.updateSingleUserController)
  .delete(userController.deteteSingleUserController);

export const userRouter = router;
