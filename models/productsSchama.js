import { Schema, model, models } from "mongoose";
const productSchama = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const products = models.Product || model("Product", productSchama);
export default products;
