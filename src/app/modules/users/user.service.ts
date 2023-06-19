import httpStatus from "http-status";
import { IUser } from "./user.interface";
import { TheUsers } from "./user.model";
import ApiError from "../../../errors/ApiError";

const createUserService = async (payload: IUser): Promise<IUser> => {
  const result = await TheUsers.create(payload);
  return result;
};

const getAllUserService = async (): Promise<IUser[]> => {
  const result = await TheUsers.find({});
  return result;
};

const getSingleUserService = async (id: string): Promise<IUser | null> => {
  const result = await TheUsers.findById({ _id: id });
  return result;
};

const updateSingleUserService = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null | undefined> => {
  const { name, ...userData } = payload;

  const updateUser: Partial<IUser> = { ...userData };

  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach((key) => {
      const nameKey = `name.${key}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (updateUser as any)[nameKey] = name[key as keyof typeof name];
    });

    const result = await TheUsers.findOneAndUpdate({ _id: id }, updateUser, {
      new: true,
    });
    return result;
  }
};

const deleteSingleUserService = async (id: string): Promise<IUser | null> => {
  const result = await TheUsers.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUserService,
  getAllUserService,
  getSingleUserService,
  updateSingleUserService,
  deleteSingleUserService,
};
