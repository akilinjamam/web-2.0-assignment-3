import mongoose from "mongoose";
import { IGenericErrorMessage } from "../app/middleware/interface/error";
import { IGenericErrorResponse } from "../app/middleware/interface/common";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  console.log("validationError");
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode,
    message: "validation error",
    errorMessages: errors,
  };
};

export default handleValidationError;
