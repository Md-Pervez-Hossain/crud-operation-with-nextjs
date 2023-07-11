import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topicsSchema";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newEmail: email } = await request.json();
  await connectMongoDb();
  await Topic.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({ message: "Topic Update" }, { status: "201" });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: "200" });
}
