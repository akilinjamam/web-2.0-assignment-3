import mongoose from "mongoose";
import { IGenericErrorMessage } from "../app/middleware/interface/error";

const handleCastError = (error: mongoose.Error.CastError) => {
  console.log("castError");
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: "Invalid Id",
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
