import { connectStr } from "@/lib/db";
import mongoose from "mongoose";
import { AccessLog } from "@/lib/model/access";  
import { NextResponse } from "next/server";

async function connectToDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectStr);
  }
}

export async function POST(req) {
  await connectToDB();
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(',')[0] : req.ip || "Unknown IP";
  const referrer = req.headers.get("referer") || "Direct Access";
  
  const accessLog = new AccessLog({ ip, referrer });
  await accessLog.save();
  
  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectToDB();
  const data = await AccessLog.find();
  console.log(data);
  return NextResponse.json(data);
}
