// This file appears to be experimental and not used in the main flow
// since there are multiple redirect implementations.
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.redirect("https://a.co/d/iPtP6Sn")
}
