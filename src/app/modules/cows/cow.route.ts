import express from "express";
import { CowController } from "./cow.controller";
const router = express.Router();

router.route("/").get(CowController.getAllCowController);
router.route("/create-cow").post(CowController.createCowController);

router
  .route("/:id")
  .get(CowController.getSingleCowController)
  .patch(CowController.updateSingleCowController)
  .delete(CowController.deteteSingleCowController);

export const cowRouter = router;
