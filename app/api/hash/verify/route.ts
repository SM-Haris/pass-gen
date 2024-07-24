import { getHash } from "@/app/utils/hashUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url as string);

  const text = searchParams.get("text");
  const hashType = searchParams.get("hashType");
  const secretKey = searchParams.get("secretKey");
  const storedHash = searchParams.get("storedHash");

  if (
    !text ||
    !hashType ||
    !storedHash ||
    (typeof hashType === "string" && hashType.startsWith("HMAC") && !secretKey)
  ) {
    return NextResponse.json(
      { error: "Missing text, hashType, or secretKey parameter" },
      { status: 400 }
    );
  }

  let computedHash: string = getHash(hashType, text, secretKey);

  const isMatch = computedHash === storedHash;

  const responseText = isMatch?"Hash matches":"Hash is not matched"

  return NextResponse.json({ responseText });
}
