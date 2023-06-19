import {
  IBreedEnum,
  ICategoryEnum,
  ILabelEnum,
  ILoacationEnum,
} from "./cow.interface";

export const cowLocation: ILoacationEnum[] = [
  "Dhaka",
  "Chattagram",
  "Barishal",
  "Rajshahi",
  "Sylhet",
  "Comilla",
  "Rangpur",
  "Mymensingh",
];

export const cowBreed: IBreedEnum[] = [
  "Brahman",
  "Nellore",
  "Sahiwal",
  "Gir",
  "Indigenous",
  "Tharparkar",
  "Kankrej",
];

export const cowLabel: ILabelEnum[] = ["for sale", "sold out"];

export const cowCategory: ICategoryEnum[] = ["Dairy", "Beef", "DualPurpose"];
