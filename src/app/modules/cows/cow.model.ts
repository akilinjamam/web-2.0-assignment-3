import { Schema, model } from "mongoose";

import { CowModel, ICows } from "./cow.interface";
import { cowBreed, cowCategory, cowLabel, cowLocation } from "./cow.constant";

export const cowSchema = new Schema<ICows, CowModel>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    location: {
      required: true,
      type: String,
      enum: cowLocation,
    },
    breed: {
      type: String,
      required: true,
      enum: cowBreed,
    },
    weight: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      enum: cowLabel,
      default: "for sale",
    },
    category: {
      type: String,
      required: true,
      enum: cowCategory,
    },
    seller: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "TheUsers",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Cow = model<ICows, CowModel>("Cow", cowSchema);
