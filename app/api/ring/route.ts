import { NextResponse } from "next/server";

export async function POST() {
  console.log("Doorbell pressed");

  return NextResponse.json({
    success: true,
    message: "Ring signal received",
  });
}
