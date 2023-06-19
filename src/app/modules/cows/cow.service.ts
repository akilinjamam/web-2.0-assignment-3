import { ICows } from "./cow.interface";
import { Cow } from "./cow.model";

const createCowService = async (payload: ICows): Promise<ICows> => {
  const result = await Cow.create(payload);
  return result;
};

const getAllCowService = async (): Promise<ICows[]> => {
  const result = await Cow.find({}).populate("seller");
  return result;
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
