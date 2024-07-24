import { getHash } from "@/app/utils/hashUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const text = searchParams.get('text');
  const hashType = searchParams.get('hashType');
  const secretKey = searchParams.get('secretKey');

  if (
    !text ||
    !hashType ||
    (typeof hashType === "string" && hashType.startsWith("HMAC") && !secretKey)
  ) {
    return NextResponse
      .json({ error: "Missing text, hashType, or secretKey parameter" }, { status: 400 });
  }

  const hashedText = getHash(hashType, text, secretKey);

  if (!hashedText) return NextResponse.json({ error: 'Invalid hash type' }, { status: 400 });

  return NextResponse.json({ hashedText }, { status: 201 });
}
