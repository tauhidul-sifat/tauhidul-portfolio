import { WixClient } from "@/lib/wixClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const paylodObject = await req.json();

    const response = await WixClient.items.insert(
      "UserContactMessage",
      paylodObject
    );

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Wix API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
