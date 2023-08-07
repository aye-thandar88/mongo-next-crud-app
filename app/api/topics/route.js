import { NextResponse } from "next/server";
import connectMongoDb from "../../../libs/mongodb";
import Topic from "../../../models/topic";

export async function POST(request) {
  const { title, description } = await request.json();
  try {
    await connectMongoDb();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
