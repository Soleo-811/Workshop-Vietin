import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully" 
    });
  } catch (error: any) {
    console.error("Form submission error:", error?.message || error);
    return NextResponse.json(
      { error: "Internal server error", message: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
