import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./user.service";
import sendRespone from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createUserController = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;

  const result = await userService.createUserService(userData);

  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users created successfully",
    data: result,
  });
});

const getAllUserController = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUserService();

  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully",
    data: result,
  });
});

const getSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await userService.getSingleUserService(id);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  }
);

const updateSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await userService.updateSingleUserService(id, userData);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  }
);

const deteteSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await userService.deleteSingleUserService(id);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  }
);

export const userController = {
  createUserController,
  getAllUserController,
  getSingleUserController,
  updateSingleUserController,
  deteteSingleUserController,
};
