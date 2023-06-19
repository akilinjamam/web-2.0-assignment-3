import express from "express";
import { userRouter } from "../modules/users/user.route";
import { cowRouter } from "../modules/cows/cow.route";
const router = express.Router();

const moduleRouter = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/cows",
    route: cowRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
