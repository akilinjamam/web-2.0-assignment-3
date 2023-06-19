/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */

import { ErrorRequestHandler, NextFunction } from "express";
import configuration from "../../configuration/index";
import { IGenericErrorMessage } from "./interface/error";
import handleValidationError from "../../errors/handleValidationError";
import { ZodError } from "zod";
import handleCastError from "../../errors/handleCastError";
import ApiError from "../../errors/ApiError";

const globalErrorHandling: ErrorRequestHandler = (
  error,
  req,
  res,
  next: NextFunction
) => {
  console.log("from global error");
  console.log("GlobalErrorHandler~:", error);

  let statusCode = 500;
  let message = "something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    console.log("error instanceOf Error");
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: configuration.env !== "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandling;
