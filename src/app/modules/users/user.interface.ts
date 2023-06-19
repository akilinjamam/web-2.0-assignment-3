import { Model } from "mongoose";

export type IRole = "seller" | "buyer";

export type IUserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  phoneNumber: string;
  role: IRole;
  password: string;
  name: IUserName;
  address: string;
  budget: string;
  income: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
