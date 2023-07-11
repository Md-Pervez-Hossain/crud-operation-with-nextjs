import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb";
import products from "../../../../models/productsSchama";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDb();
  await products.create({ title, description });
  return NextResponse.json({ messsage: "Product Addedd" }, { status: "201" });
}
export async function GET() {
  await connectMongoDb();
  const product = await products.find();
  return NextResponse.json({ product });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await products.findByIdAndDelete(id);
  return NextResponse.json({ message: "Products Deleted" }, { Status: "2001" });
}
// export async function PUT(request, { params }) {
//   const { id } = params;
//   const { updatedTitle: title, updatedDescription: description } =
//     await request.json();
//   await connectMongoDb();
//   await products.findByIdAndUpdate(id, { title, description });
//   return NextResponse.json({ Message: "Product Updated" }, { status: "201" });
// }
