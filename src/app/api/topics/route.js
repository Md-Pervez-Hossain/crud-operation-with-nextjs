import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb";
import Topic from "../../../../models/topicsSchema";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDb();
  await Topic.create({ name, email });
  return NextResponse.json({ Message: "Topic Added", Status: "201" });
}
export async function GET() {
  await connectMongoDb();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { Status: "200" });
}
