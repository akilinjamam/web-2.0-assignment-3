import { Model, Types } from "mongoose";
import { IUser } from "../users/user.interface";

export type ILoacationEnum =
  | "Dhaka"
  | "Chattagram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh";

export type IBreedEnum =
  | "Brahman"
  | "Nellore"
  | "Sahiwal"
  | "Gir"
  | "Indigenous"
  | "Tharparkar"
  | "Kankrej";

export type ILabelEnum = "for sale" | "sold out";

export type ICategoryEnum = "Dairy" | "Beef" | "DualPurpose";

export type ICows = {
  name: string;
  age: string;
  price: string;
  location: ILoacationEnum;
  breed: IBreedEnum;
  weight: string;
  label: ILabelEnum;
  category?: ICategoryEnum;
  seller: Types.ObjectId | IUser;
};

export type CowModel = Model<ICows, Record<string, unknown>>;
