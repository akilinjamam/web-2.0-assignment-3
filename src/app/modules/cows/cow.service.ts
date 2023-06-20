import { SortOrder } from "mongoose";
import { IGenericResponse } from "../../middleware/interface/common";
import { IPaginationOption } from "../../middleware/interface/pagination";
import { ICows } from "./cow.interface";
import { Cow } from "./cow.model";
import { cowSearchableFields } from "./cow.constant";

const createCowService = async (payload: ICows): Promise<ICows> => {
  const result = await Cow.create(payload);
  return result;
};

const getAllCowService = async (
  payload: IPaginationOption
): Promise<IGenericResponse<ICows[]>> => {
  const {
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
    searchTerm,
    ...exectmatch
  } = payload;

  const skip = (Number(page) - 1) * Number(limit);
  console.log(skip);

  const sortedField: { [key: string]: any } = {};

  if (sortBy && sortOrder) {
    sortedField[sortBy] = sortOrder;
  }

  console.log("sortedField", sortedField);

  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: cowSearchableFields.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (exectmatch) {
    andCondition.push(exectmatch);
  }

  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await Cow.find(whereCondition)
    .sort(sortedField)
    .skip(skip)
    .limit(limit)
    .populate("seller");

  const total = await Cow.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleCowService = async (id: string): Promise<ICows | null> => {
  const result = await Cow.findById({ _id: id });
  return result;
};

const updateSingleCowService = async (
  id: string,
  payload: Partial<ICows>
): Promise<ICows | null | undefined> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleCowService = async (id: string): Promise<ICows | null> => {
  const result = await Cow.findByIdAndDelete(id);
  return result;
};

export const cowService = {
  createCowService,
  getAllCowService,
  getSingleCowService,
  updateSingleCowService,
  deleteSingleCowService,
};

// apollo repo link:
/* 
 https://github.com/Programming-Hero-Web-Course4/l2a3-cow-hut-backend-assignment-akilinjamam.git
*/
