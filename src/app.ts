import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandling from "./app/middleware/globalErrorHandler";
import httpStatus from "http-status";
import router from "./app/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("hello world. hi tanjil bin kaisar");
// });

app.use("/api/v1", router);

// global error handlers
app.use(globalErrorHandling);

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
  next();
});

export default app;

// https://www.fiverr.com/businessexpert7/develop-a-topnotch-business-website?context_referrer=search_gigs_with_recommendations_row_1&source=main_banner&ref_ctx_id=076ffff18b28acae224e5f76a8edee4e&pckg_id=1&pos=4&context_type=auto&funnel=076ffff18b28acae224e5f76a8edee4e&imp_id=988e7d1d-449f-4999-bd02-0b4bf7bc30f9
