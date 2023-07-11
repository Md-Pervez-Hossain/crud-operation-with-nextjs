import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../libs/mongodb";
import products from "../../../../../models/productsSchama";

export async function PUT(request, { params }) {
  const { id } = params;
  const { updatedTitle: title, updatedDescription: description } =
    await request.json();
  await connectMongoDb();
  await products.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Product Update" }, { status: "201" });
}
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const product = await products.findOne({ _id: id });
  return NextResponse.json({ product }, { status: "200" });
}
