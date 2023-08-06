import { connectDB } from "@/Functions";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  return NextResponse.json("Success");
};
