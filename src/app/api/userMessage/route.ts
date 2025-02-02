import { WixClient } from "@/lib/wixClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payloadObject = await req.json();

    const response = await WixClient.items.insert(
      "UserContactMessage",
      payloadObject
    );

    return NextResponse.json({ success: true, data: response });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
