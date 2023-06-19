import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendRespone from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { cowService } from "./cow.service";

const createCowController = catchAsync(async (req: Request, res: Response) => {
  const { ...CowData } = req.body;

  const result = await cowService.createCowService(CowData);

  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cows created successfully",
    data: result,
  });
});

const getAllCowController = catchAsync(async (req: Request, res: Response) => {
  const result = await cowService.getAllCowService();

  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cows retrieved successfully",
    data: result,
  });
});

const getSingleCowController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await cowService.getSingleCowService(id);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Cow retrieved successfully",
      data: result,
    });
  }
);

const updateSingleCowController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const CowData = req.body;
    const result = await cowService.updateSingleCowService(id, CowData);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Cow retrieved successfully",
      data: result,
    });
  }
);

const deteteSingleCowController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await cowService.deleteSingleCowService(id);

    sendRespone(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Cow deleted successfully",
      data: result,
    });
  }
);

export const CowController = {
  createCowController,
  getAllCowController,
  getSingleCowController,
  updateSingleCowController,
  deteteSingleCowController,
};
