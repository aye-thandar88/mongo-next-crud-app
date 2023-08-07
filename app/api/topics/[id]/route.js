import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  try {
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDb();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
